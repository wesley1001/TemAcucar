const initialState = {
  currentUser: null,
  credentials: null,
  startingUp: true,
  gettingUser: false,
  signingIn: false,
  signingOut: false,
  facebookSigningIn: false,
  requestingPassword: false,
  resetPassword: false,
  resetingPassword: false,
  signInError: null,
  signUpError: null,
  facebookError: null,
  requestPasswordError: null,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_GET_USER_REQUEST':
      return {
        ...state, 
        gettingUser: true,
      }
    case 'AUTH_GET_USER_SUCCESS':
      return {
        ...state, 
        currentUser: action.currentUser,
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
        currentUser: null,
      }
    case 'AUTH_SIGN_IN_REQUEST':
      return {
        ...state, 
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
        },
        signInError: null,
        signingIn: true,
      }
    case 'AUTH_SIGN_IN_SUCCESS':
      return {
        ...state, 
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
        },
        credentials: action.credentials,
        signingIn: false,
        signInError: null,
        signUpError: null,
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
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
        },
        signingUp: true,
      }
    case 'AUTH_SIGN_UP_SUCCESS':
      return {
        ...state, 
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
        },
        credentials: action.credentials,
        signInError: null,
        signUpError: null,
        signingUp: false,
      }
    case 'AUTH_SIGN_UP_FAILURE':
      return {
        ...state, 
        currentUser: null,
        signingUp: false,
        signUpError: action.error,
      }
    case 'AUTH_SIGN_OUT_REQUEST':
      return {
        ...state, 
        signingOut: true,
      }
    case 'AUTH_SIGN_OUT_SUCCESS':
      return {
        ...state, 
        currentUser: null,
        credentials: null,
        signingOut: false,
      }
    case 'AUTH_SIGN_OUT_FAILURE':
      return {
        ...state, 
        currentUser: null,
        credentials: null,
        signingOut: false,
      }
    case 'AUTH_FACEBOOK_REQUEST':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.currentUser,
        },
        facebookSigningIn: true,
      }
    case 'AUTH_FACEBOOK_SUCCESS':
      return {
        ...state, 
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
        },
        credentials: action.credentials,
        facebookSigningIn: false,
        facebookError: null,
        startingUp: false,
      }
    case 'AUTH_FACEBOOK_FAILURE':
      return {
        ...state, 
        facebookSigningIn: false,
        facebookError: action.error,
        startingUp: false,
      }
    case 'AUTH_REQUEST_PASSWORD_REQUEST':
      return {
        ...state, 
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
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
        signInError: null,
        signUpError: null,
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
        currentUser: {
          ...state.currentUser, 
          ...action.currentUser,
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
      // Here I defined a standard for the whole app. If an action passes a credentials object, it will update BOTH auth.credentials AND auth.currentUser states.
      // WARNING: do not pass action.credentials object to any action unless it contains real and current auth credentials for the current user.
      // WARNING: do not pass action.currentUser object to any action unless it contains pertinent information of the current user.
      if (action.credentials) {
        return {
          ...state, 
          currentUser: {
            ...state.currentUser, 
            ...action.currentUser,
          },
          credentials: action.credentials,
        }
      } else {
        return state
      }
  }
}
