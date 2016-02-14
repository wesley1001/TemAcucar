import React, { Platform, NativeModules } from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager

import { apiAction, apiDispatchAction } from './BasicActions'
import { storedAuthReset } from './StoredAuthActions'

export function authRefreshUser(credentials) {
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
        storedAuthReset(dispatch)
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

function authFacebookLogin(callback) {
  FBLoginManager.loginWithPermissions(["public_profile", "email", "user_friends"], (facebookError, facebookData) => {
    if (Platform.OS == 'ios') {
      callback(facebookData, facebookError)
    } else {
      callback({ credentials: facebookData }, facebookError)
    }
  })
}

export function authFacebook() {
  return dispatch => {
    authFacebookLogin((data, facebookError) => {
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
    afterAction: (dispatch) => storedAuthReset(dispatch),
  })
}

export function authRequestPassword(currentUser) {
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

export function authResetPassword(currentUser) {
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
