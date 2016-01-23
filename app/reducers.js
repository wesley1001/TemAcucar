import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const initialAuthState = {
  user: null,
  credentials: null,
  facebook: null,
  startingUp: true,
  gettingUser: false,
  signingIn: false,
  signingIn: false,
  signingOut: false,
  signInError: null,
  requestingPassword: false,
  resetPassword: false,
  requestPasswordError: null,
}

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'AUTH_GET_USER_REQUEST':
      return {
        ...state, 
        gettingUser: true,
      }
    case 'AUTH_GET_USER_SUCCESS':
      return {
        ...state, 
        user: action.user,
        gettingUser: false,
      }
    case 'AUTH_GET_USER_FAILURE':
      return {
        ...state, 
        gettingUser: false,
        startingUp: false,
      }
    case 'AUTH_RESET_USER_SUCCESS':
      return {
        ...state, 
        user: null,
      }
    case 'AUTH_SIGN_IN_REQUEST':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        signingIn: true,
      }
    case 'AUTH_SIGN_IN_SUCCESS':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        credentials: action.credentials,
        signingIn: false,
        signInError: null,
        startingUp: false,
      }
    case 'AUTH_SIGN_IN_FAILURE':
      return {
        ...state, 
        signingIn: false,
        signInError: action.error,
        startingUp: false,
      }
    case 'AUTH_SIGN_UP_REQUEST':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        signingUp: true,
      }
    case 'AUTH_SIGN_UP_SUCCESS':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        credentials: action.credentials,
        signingUp: false,
      }
    case 'AUTH_SIGN_UP_FAILURE':
      return {
        ...state, 
        user: null,
        signingUp: false,
      }
    case 'AUTH_SIGN_OUT_REQUEST':
      return {
        ...state, 
        signingOut: true,
      }
    case 'AUTH_SIGN_OUT_SUCCESS':
      return {
        ...state, 
        user: null,
        credentials: null,
        signingOut: false,
      }
    case 'AUTH_SIGN_OUT_FAILURE':
      return {
        ...state, 
        user: null,
        credentials: null,
        signingOut: false,
      }
    case 'AUTH_FACEBOOK_REQUEST':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
        signingIn: true,
      }
    case 'AUTH_FACEBOOK_SUCCESS':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        credentials: action.credentials,
        signingIn: false,
        signInError: null,
        startingUp: false,
      }
    case 'AUTH_FACEBOOK_FAILURE':
      return {
        ...state, 
        signingIn: false,
        signInError: action.error,
        startingUp: false,
      }
    case 'AUTH_REQUEST_PASSWORD_REQUEST':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        requestingPassword: true,
        resetPassword: false,
        requestPasswordError: null,
      }
    case 'AUTH_REQUEST_PASSWORD_SUCCESS':
      return {
        ...state, 
        requestingPassword: false,
        resetPassword: true,
        requestPasswordError: null,
      }
    case 'AUTH_REQUEST_PASSWORD_FAILURE':
      return {
        ...state, 
        requestingPassword: false,
        resetPassword: false,
        requestPasswordError: action.error,
      }
    case 'AUTH_RESET_PASSWORD_REQUEST':
      return {
        ...state, 
        user: {
          ...state.user, 
          ...action.user,
        },
        resetingPassword: true,
        resetPasswordError: null,
      }
    case 'AUTH_RESET_PASSWORD_SUCCESS':
      return {
        ...state, 
        resetingPassword: false,
        resetPasswordError: null,
        resetPassword: false,
      }
    case 'AUTH_RESET_PASSWORD_FAILURE':
      return {
        ...state, 
        resetingPassword: false,
        resetPasswordError: action.error,
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  auth,
  form
})

export default reducer
