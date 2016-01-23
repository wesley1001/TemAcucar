import React, { NativeModules } from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager
import Keychain from 'react-native-keychain'

import Config from "./Config"

function authHeaders(credentials) {
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

function parseError(response) {
  const contentType = response.headers.get('content-type')
  if (contentType.match(/application\/json/)) {
    return JSON.parse(response._bodyText)
  } else {
    return response.status
  }
}

export function authGetUser(user) {
  return dispatch => {
    if (user) 
      return
    dispatch({ type: 'AUTH_GET_USER_REQUEST' })
    Keychain
    .getInternetCredentials(Config.apiUrl)
    .then((credentials) => {
      if (credentials.username && credentials.username.length > 0 && credentials.password && credentials.password.length > 0) {
        dispatch({
          type: 'AUTH_GET_USER_SUCCESS',
          user: {
            email: credentials.username,
            password: credentials.password,
          },
        })
      } else {
        dispatch({
          type: 'AUTH_GET_USER_FAILURE',
          error: 'Credenciais inválidas.',
        })
      }
    })
    .catch(error => {
      FBLoginManager.getCredentials(function(facebookError, data){
        if (!facebookError) {
          dispatch({
            type: 'AUTH_GET_USER_SUCCESS',
            user: {
              facebook: data.credentials,
            },
          })
        } else {
          dispatch({
            type: 'AUTH_GET_USER_FAILURE',
            error,
          })
        }
      })
    })
  }
}

function authSetUser(dispatch, user) {
  if (user) {
    dispatch({
      type: 'AUTH_SET_USER_REQUEST',
      user,
    })
    Keychain
    .setInternetCredentials(Config.apiUrl, user.email, user.password)
    .then(() => {
      dispatch({
        type: 'AUTH_SET_USER_SUCCESS',
        user,
      })
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SET_USER_FAILURE',
        error,
      })
    })
  }
}

function authResetUser(dispatch) {
  dispatch({ type: 'AUTH_RESET_USER_REQUEST'})
  Keychain
  .resetInternetCredentials(Config.apiUrl)
  .then(() => {
    FBLoginManager.logout((error, data) => {
      if (error) {
        dispatch({
          type: 'AUTH_RESET_USER_FAILURE',
          error,
        })
      }
    })
  })
  .then(() => dispatch({ type: 'AUTH_RESET_USER_SUCCESS' }))
  .catch(error => {
    dispatch({
      type: 'AUTH_RESET_USER_FAILURE',
      error,
    })
  })
}

export function authSignIn(user) {
  return dispatch => {
    if (user.email && user.password) {
      dispatch(authEmail(user))
    } else if (user.facebook) {
      dispatch(authFacebook())
    }
  }
}

export function authSignUp(user) {
  return dispatch => {
    dispatch({
      type: 'AUTH_SIGN_UP_REQUEST',
      user,
    })
    fetch(`${Config.apiUrl}/auth/`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password,
      })
    })
    .then(response => {
      if(response.ok) {
        const credentials = {
          accessToken: response.headers.get('access-token'),
          client: response.headers.get('client'),
          expiry: response.headers.get('expiry'),
          tokenType: response.headers.get('token-type'),
          uid: response.headers.get('uid'),
        }
        const json = JSON.parse(response._bodyText)
        const userData = json.data
        dispatch({
          type: 'AUTH_SIGN_UP_SUCCESS',
          user: userData,
          credentials,
        })
        return user
      } else {
        const error = parseError(response)
        dispatch({
          type: 'AUTH_SIGN_UP_FAILURE',
          error,
        })
      }
    })
    .then((user) => authSetUser(dispatch, user))
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_UP_FAILURE',
        error,
      })
    })
  }  
}

export function authFacebook() {
  return dispatch => {
    FBLoginManager.loginWithPermissions(["public_profile", "email", "user_friends", "user_about_me"], (facebookError, data) => {
      if (!facebookError) {
        const facebook = data.credentials
        dispatch({
          type: 'AUTH_FACEBOOK_REQUEST',
          user: { facebook },
        })
        fetch(`${Config.apiUrl}/users/facebook_access_token?t=${Date.now()}`, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: facebook.token,
          })
        })
        .then(response => {
          if(response.ok) {
            const credentials = {
              accessToken: response.headers.get('access-token'),
              client: response.headers.get('client'),
              expiry: response.headers.get('expiry'),
              tokenType: response.headers.get('token-type'),
              uid: response.headers.get('uid'),
            }
            const user = JSON.parse(response._bodyText)
            dispatch({
              type: 'AUTH_FACEBOOK_SUCCESS',
              user,
              credentials,
            })
          } else {
            const error = parseError(response)
            dispatch({
              type: 'AUTH_FACEBOOK_FAILURE',
              error,
            })
          }
        })
        .catch(error => {
          dispatch({
            type: 'AUTH_FACEBOOK_FAILURE',
            error,
          })
        })
      } else {
        dispatch({
          type: 'AUTH_FACEBOOK_FAILURE',
          error,
        })
      }
    })
  }  
}

function authEmail(user) {
  return dispatch => {
    dispatch({
      type: 'AUTH_SIGN_IN_REQUEST',
      user,
    })
    fetch(`${Config.apiUrl}/auth/sign_in`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
    })
    .then(response => {
      if(response.ok) {
        const credentials = {
          accessToken: response.headers.get('access-token'),
          client: response.headers.get('client'),
          expiry: response.headers.get('expiry'),
          tokenType: response.headers.get('token-type'),
          uid: response.headers.get('uid'),
        }
        const json = JSON.parse(response._bodyText)
        const userData = json.data
        dispatch({
          type: 'AUTH_SIGN_IN_SUCCESS',
          user: userData,
          credentials,
        })
        return user
      } else {
        const error = parseError(response)
        dispatch({
          type: 'AUTH_SIGN_IN_FAILURE',
          error,
        })
      }
    })
    .then((user) => authSetUser(dispatch, user))
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_IN_FAILURE',
        error,
      })
    })
  }  
}

export function authSignOut(credentials) {
  return dispatch => {
    dispatch({ type: 'AUTH_SIGN_OUT_REQUEST' })
    fetch(`${Config.apiUrl}/auth/sign_out`, {
      method: 'delete',
      headers: authHeaders(credentials)
    })
    .then(response => {
      if(response.ok) {
        dispatch({ type: 'AUTH_SIGN_OUT_SUCCESS' })
      } else {
        const error = parseError(response)
        dispatch({
          type: 'AUTH_SIGN_OUT_FAILURE',
          error,
        })
      }
    })
    .then(() => authResetUser(dispatch))
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_OUT_FAILURE',
        error,
      })
    })
  }  
}

export function authRequestPassword(user) {
  return dispatch => {
    dispatch({
      type: 'AUTH_REQUEST_PASSWORD_REQUEST',
      user,
    })
    fetch(`${Config.apiUrl}/auth/password`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        redirect_url: Config.apiUrl,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({ type: 'AUTH_REQUEST_PASSWORD_SUCCESS' })
      } else {
        const error = parseError(response).errors[0]
        dispatch({
          type: 'AUTH_REQUEST_PASSWORD_FAILURE',
          error,
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_REQUEST_PASSWORD_FAILURE',
        error,
      })
    })
  }  
}

export function authResetPassword(user) {
  return dispatch => {
    dispatch({
      type: 'AUTH_RESET_PASSWORD_REQUEST',
      user,
    })
    console.log(user)
    fetch(`${Config.apiUrl}/users/password`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        token: user.resetPasswordToken,
      })
    })
    .then(response => {
      if(response.ok) {
        const credentials = {
          accessToken: response.headers.get('access-token'),
          client: response.headers.get('client'),
          expiry: response.headers.get('expiry'),
          tokenType: response.headers.get('token-type'),
          uid: response.headers.get('uid'),
        }
        const json = JSON.parse(response._bodyText)
        const userData = json.data
        dispatch({
          type: 'AUTH_RESET_PASSWORD_SUCCESS',
          user: userData,
          credentials,
        })
        return user
      } else {
        const error = parseError(response).errors[0]
        dispatch({
          type: 'AUTH_RESET_PASSWORD_FAILURE',
          error,
        })
      }
    })
    .then((user) => authSetUser(dispatch, user))
    .catch(error => {
      dispatch({
        type: 'AUTH_RESET_PASSWORD_FAILURE',
        error,
      })
    })
  }  
}
