import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const initialAuthState = {
  user: null,
  credentials: null,
  facebook: null,
  startingUp: true,
  gettingUser: true,
  signingIn: false,
  signingOut: false,
  signInError: null,
  signOutError: null,
}

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'AUTH_GET_USER_REQUEST':
      return {
        ...state, 
        user: action.user,
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
        signOutError: null,
      }
    case 'AUTH_SIGN_OUT_FAILURE':
      return {
        ...state, 
        user: null,
        credentials: null,
        signingOut: false,
        signOutError: action.error,
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
    default:
      return state
  }
}

const reducer = combineReducers({
  auth,
  form
})

export default reducer
