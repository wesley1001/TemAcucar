import React, { Platform, NativeModules } from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager
import SimpleStore from 'react-native-simple-store'

import Config from "../Config"
import { apiAction, parseError } from './BasicActions'

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

export function authGetStoredAuth(currentUser) {
  return dispatch => {
    if (currentUser) 
      return
    dispatch({ type: 'AUTH_GET_STORED_AUTH_REQUEST' })
    SimpleStore.get('auth')
    .then((auth) => {
      if (auth) {
        dispatch({
          type: 'AUTH_GET_STORED_AUTH_SUCCESS',
          credentials: auth.credentials,
          currentUser: auth.currentUser,
        })
      } else {
        dispatch({
          type: 'AUTH_GET_STORED_AUTH_FAILURE',
          error: {
            id: 'no_stored_credentials',
            message: 'Could not find stored credentials.',
          },
        })
      }
    })
    .catch(error => {
      authGetFacebook((data, facebookError) => {
        if (!facebookError) {
          dispatch({
            type: 'AUTH_GET_STORED_AUTH_SUCCESS',
            currentUser: {
              facebook: data.credentials,
            },
          })
        } else {
          dispatch({
            type: 'AUTH_GET_STORED_AUTH_FAILURE',
            error: parseError(error),
          })
        }
      })
    })
  }
}

export function authSetStoredAuth(dispatch, credentials, currentUser) {
  if (credentials && currentUser) {
    dispatch({
      type: 'AUTH_SET_STORED_AUTH_REQUEST',
      credentials,
      currentUser,
    })
    SimpleStore.save('auth', { credentials, currentUser })
    .then(() => {
      dispatch({
        type: 'AUTH_SET_STORED_AUTH_SUCCESS',
        credentials,
        currentUser,
      })
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SET_STORED_AUTH_FAILURE',
        error: parseError(error),
      })
    })
  }
}

function authResetStoredAuth(dispatch) {
  dispatch({ type: 'AUTH_RESET_STORED_AUTH_REQUEST'})
  FBLoginManager.logout((error, data) => {
    if (error) {
      dispatch({
        type: 'AUTH_RESET_STORED_AUTH_FAILURE',
        error,
      })
    } else {
      SimpleStore.delete('auth')
      .then(() => dispatch({ type: 'AUTH_RESET_STORED_AUTH_SUCCESS' }))
      .catch(error => {
        dispatch({
          type: 'AUTH_RESET_STORED_AUTH_FAILURE',
          error: parseError(error),
        })
      })
    }
  })
}

export function authRefreshUser(auth) {
  const { credentials } = auth
  return apiAction({
    prefix: 'AUTH_REFRESH_USER',
    path: `/me`,
    credentials,
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    processResponse: (response) => {
      return { currentUser: JSON.parse(response._bodyText) }
    },
    afterAction: (dispatch, response) => {
      if (response.status === 401) {
        authResetStoredAuth(dispatch)
      }
    },
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
  return apiAction({
    prefix: 'AUTH_SIGN_UP',
    path: '/users',
    method: 'post',
    params: {
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email,
      password: currentUser.password,
    },
    requestAttributes: { currentUser },
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    processResponse: (response) => {
      return { currentUser: JSON.parse(response._bodyText) }
    },
  })
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
  return apiAction({
    prefix: 'AUTH_SIGN_IN',
    path: '/authentications',
    method: 'post',
    params: {
      email: currentUser.email,
      password: currentUser.password,
    },
    requestAttributes: { currentUser },
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    processResponse: (response) => {
      return { currentUser: JSON.parse(response._bodyText) }
    },
  })
}

export function authSignOut(credentials) {
  return apiAction({
    prefix: 'AUTH_SIGN_OUT',
    path: '/authentications',
    method: 'delete',
    credentials: credentials,
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    afterAction: (dispatch) => authResetStoredAuth(dispatch),
  })
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
      method: 'put',
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
    .catch(error => {
      dispatch({
        type: 'AUTH_RESET_PASSWORD_FAILURE',
        error: parseError(error),
      })
    })
  }  
}
