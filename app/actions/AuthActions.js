import React, { Platform, NativeModules } from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager
import Keychain from 'react-native-keychain'

import Config from "../Config"
import { parseError } from './BasicActions'

export function authHeaders(credentials) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Token': credentials.accessToken,
    'Expiry': credentials.expiry,
    'Token-Type': credentials.tokenType,
    'Uid': credentials.uid,
    'Client': credentials.client,
  }
}

export function authCredentials(response) {
  return {
    accessToken: response.headers.get('access-token'),
    client: response.headers.get('client'),
    expiry: response.headers.get('expiry'),
    tokenType: response.headers.get('token-type'),
    uid: response.headers.get('uid'),
  }
}

function authGetFacebook(callback) {
  if (Platform.OS == 'ios') {
    FBLoginManager.getCredentials((facebookError, facebookData) => {
      callback(facebookData, facebookError)
    })
  } else {
    FBLoginManager.getCurrentToken((token) => {
      if ((typeof token) === 'string' && token.length > 0) {
        callback({ credentials: {token} }, null)
      } else {
        callback(null, 'LoginNotFound')
      }
    })
  }
}

function authFacebookLogin(callback) {
  FBLoginManager.loginWithPermissions(["public_profile", "email", "user_friends"], (facebookError, facebookData) => {
    if (Platform.OS == 'ios') {
      callback(facebookData, facebookError)
    } else {
      callback({ credentials: facebookData }, facebookError)
    }
  })
}

export function authGetUser(currentUser) {
  return dispatch => {
    if (currentUser) 
      return
    dispatch({ type: 'AUTH_GET_USER_REQUEST' })
    Keychain
    .getInternetCredentials(Config.apiUrl)
    .then((credentials) => {
      if (credentials.username && credentials.username.length > 0 && credentials.password && credentials.password.length > 0) {
        dispatch({
          type: 'AUTH_GET_USER_SUCCESS',
          currentUser: {
            email: credentials.username,
            password: credentials.password,
          },
        })
      } else {
        dispatch({
          type: 'AUTH_GET_USER_FAILURE',
          error: {
            id: 'invalid_internet_credentials',
            message: 'Invalid internet credentials.',
          },
        })
      }
    })
    .catch(error => {
      authGetFacebook((data, facebookError) => {
        if (!facebookError) {
          dispatch({
            type: 'AUTH_GET_USER_SUCCESS',
            currentUser: {
              facebook: data.credentials,
            },
          })
        } else {
          dispatch({
            type: 'AUTH_GET_USER_FAILURE',
            error: parseError(error),
          })
        }
      })
    })
  }
}

export function authSetUser(dispatch, currentUser) {
  if (currentUser && currentUser.email && currentUser.email.length > 0 && currentUser.password && currentUser.password.length > 0) {
    dispatch({
      type: 'AUTH_SET_USER_REQUEST',
      currentUser,
    })
    Keychain
    .setInternetCredentials(Config.apiUrl, currentUser.email, currentUser.password)
    .then(() => {
      dispatch({
        type: 'AUTH_SET_USER_SUCCESS',
        currentUser,
      })
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SET_USER_FAILURE',
        error: parseError(error),
      })
    })
  }
}

function authResetUser(dispatch) {
  dispatch({ type: 'AUTH_RESET_USER_REQUEST'})
  FBLoginManager.logout((error, data) => {
    if (error) {
      dispatch({
        type: 'AUTH_RESET_USER_FAILURE',
        error,
      })
    } else {
      Keychain
      .resetInternetCredentials(Config.apiUrl)
      .then(() => {
      })
      .then(() => dispatch({ type: 'AUTH_RESET_USER_SUCCESS' }))
      .catch(error => {
        dispatch({
          type: 'AUTH_RESET_USER_FAILURE',
          error: parseError(error),
        })
      })
    }
  })
}

export function authSignIn(currentUser) {
  return dispatch => {
    if (currentUser.email && currentUser.password) {
      dispatch(authEmail(currentUser))
    } else if (currentUser.facebook) {
      dispatch(authFacebook())
    }
  }
}

export function authSignUp(currentUser) {
  return dispatch => {
    dispatch({
      type: 'AUTH_SIGN_UP_REQUEST',
      currentUser,
    })
    fetch(`${Config.apiUrl}/users`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        password: currentUser.password,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'AUTH_SIGN_UP_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
        return true
      } else {
        dispatch({
          type: 'AUTH_SIGN_UP_FAILURE',
          error: parseError(response),
        })
      }
    })
    .then((shouldSetUser) => {
      if (shouldSetUser)
        authSetUser(dispatch, currentUser)
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_UP_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function authFacebook() {
  return dispatch => {
    authFacebookLogin((data, facebookError) => {
      if (!facebookError) {
        const facebook = data.credentials
        dispatch({
          type: 'AUTH_FACEBOOK_REQUEST',
          currentUser: { facebook },
        })
        fetch(`${Config.apiUrl}/authentications`, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            facebook_token: facebook.token,
          })
        })
        .then(response => {
          if(response.ok) {
            dispatch({
              type: 'AUTH_FACEBOOK_SUCCESS',
              currentUser: JSON.parse(response._bodyText),
              credentials: authCredentials(response),
            })
          } else {
            dispatch({
              type: 'AUTH_FACEBOOK_FAILURE',
              error: parseError(response),
            })
          }
        })
        .catch(error => {
          dispatch({
            type: 'AUTH_FACEBOOK_FAILURE',
            error: parseError(error),
          })
        })
      } else {
        dispatch({
          type: 'AUTH_FACEBOOK_FAILURE',
          error: { id: 'facebook_auth_error', message: facebookError },
        })
      }
    })
  }  
}

function authEmail(currentUser) {
  return dispatch => {
    dispatch({
      type: 'AUTH_SIGN_IN_REQUEST',
      currentUser,
    })
    fetch(`${Config.apiUrl}/authentications`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: currentUser.email,
        password: currentUser.password,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'AUTH_SIGN_IN_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
        return true
      } else {
        dispatch({
          type: 'AUTH_SIGN_IN_FAILURE',
          error: parseError(response),
        })
      }
    })
    .then((shouldSetUser) => {
      if (shouldSetUser)
        authSetUser(dispatch, currentUser)
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_IN_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function authSignOut(credentials) {
  return dispatch => {
    dispatch({ type: 'AUTH_SIGN_OUT_REQUEST' })
    fetch(`${Config.apiUrl}/authentications`, {
      method: 'delete',
      headers: authHeaders(credentials)
    })
    .then(response => {
      if(response.ok) {
        dispatch({ type: 'AUTH_SIGN_OUT_SUCCESS' })
      } else {
        dispatch({
          type: 'AUTH_SIGN_OUT_FAILURE',
          error: parseError(response),
        })
      }
    })
    .then(() => authResetUser(dispatch))
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_OUT_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function authRequestPassword(currentUser) {
  return dispatch => {
    dispatch({
      type: 'AUTH_REQUEST_PASSWORD_REQUEST',
      currentUser,
    })
    fetch(`${Config.apiUrl}/password`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: currentUser.email,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({ type: 'AUTH_REQUEST_PASSWORD_SUCCESS' })
      } else {
        dispatch({
          type: 'AUTH_REQUEST_PASSWORD_FAILURE',
          error: parseError(response),
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_REQUEST_PASSWORD_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function authResetPassword(currentUser) {
  return dispatch => {
    dispatch({
      type: 'AUTH_RESET_PASSWORD_REQUEST',
      currentUser,
    })
    fetch(`${Config.apiUrl}/password`, {
      method: 'patch',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: currentUser.email,
        password: currentUser.password,
        token: currentUser.reset_password_token,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'AUTH_RESET_PASSWORD_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
        return true
      } else {
        dispatch({
          type: 'AUTH_RESET_PASSWORD_FAILURE',
          error: parseError(response),
        })
      }
    })
    .then((shouldSetUser) => {
      if (shouldSetUser)
        authSetUser(dispatch, currentUser)
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_RESET_PASSWORD_FAILURE',
        error: parseError(error),
      })
    })
  }  
}
