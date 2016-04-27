import React, { Platform, NativeModules } from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager

import { apiAction, apiDispatchAction } from './BasicActions'
import * as StoredAuthActions from './StoredAuthActions'

export function refreshUser(credentials) {
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
        StoredAuthActions.reset(dispatch)
      }
    },
  })
}

export function signIn(currentUser) {
  return dispatch => {
    if (currentUser.email && currentUser.password) {
      dispatch(email(currentUser))
    }
  }
}

export function signUp(currentUser) {
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

function facebookGetCredentials(callback) {
  FBLoginManager.loginWithPermissions(["public_profile", "email", "user_friends"], (facebookError, facebookData) => {
    if (Platform.OS == 'ios') {
      callback(facebookData, facebookError)
    } else {
      callback({ credentials: facebookData }, facebookError)
    }
  })
}

export function facebook(credentials, currentUser) {
  return dispatch => {
    if (credentials) {
      dispatch(facebookConnect(credentials, currentUser))
    } else {
      dispatch(facebookSignIn())
    }
  }
}

function facebookConnect(credentials, currentUser) {
  return dispatch => {
    facebookGetCredentials((data, facebookError) => {
      if (!facebookError) {
        const facebook = data.credentials
        apiDispatchAction(dispatch, {
          prefix: 'AUTH_FACEBOOK_CONNECT',
          path: '/users/facebook',
          method: 'put',
          params: {
            facebook_token: facebook.token,
          },
          credentials,
          requestAttributes: {
            currentUser: {
              ...currentUser,
              facebook,
            },
          },
          currentUser: (response) => {
            return JSON.parse(response._bodyText)
          },
          processResponse: (response) => {
            return { currentUser: JSON.parse(response._bodyText) }
          },
        })
      } else {
        dispatch({
          type: 'AUTH_FACEBOOK_CONNECT_FAILURE',
          error: { id: 'facebook_connect_error', message: facebookError },
        })
      }
    })
  }  
}

function facebookSignIn() {
  return dispatch => {
    facebookGetCredentials((data, facebookError) => {
      if (!facebookError) {
        const facebook = data.credentials
        apiDispatchAction(dispatch, {
          prefix: 'AUTH_FACEBOOK',
          path: '/authentications',
          method: 'post',
          params: {
            facebook_token: facebook.token,
          },
          requestAttributes: {
            currentUser: { facebook },
          },
          currentUser: (response) => {
            return JSON.parse(response._bodyText)
          },
          processResponse: (response) => {
            return { currentUser: JSON.parse(response._bodyText) }
          },
        })
      } else {
        dispatch({
          type: 'AUTH_FACEBOOK_FAILURE',
          error: { id: 'facebook_sign_in_error', message: facebookError },
        })
      }
    })
  }  
}

function email(currentUser) {
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

export function signOut(credentials) {
  return apiAction({
    prefix: 'AUTH_SIGN_OUT',
    path: '/authentications',
    method: 'delete',
    credentials: credentials,
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    afterAction: (dispatch) => StoredAuthActions.reset(dispatch),
  })
}

export function requestPassword(currentUser) {
  return apiAction({
    prefix: 'AUTH_REQUEST_PASSWORD',
    path: '/password',
    method: 'post',
    params: {
      email: currentUser.email,
    },
    requestAttributes: { currentUser },
    currentUser: () => currentUser,
  })
}

export function resetPassword(currentUser) {
  return apiAction({
    prefix: 'AUTH_RESET_PASSWORD',
    path: '/password',
    method: 'put',
    params: {
      email: currentUser.email,
      password: currentUser.password,
      token: currentUser.reset_password_token,
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
