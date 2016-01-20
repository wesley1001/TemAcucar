import { combineReducers } from 'redux'

const initialAuth = {
  user: null,
  credentials: null,
  fetchingUser: false,
  signingIn: false,
}

function auth(state = initialAuth, action) {
  switch (action.type) {
    case 'AUTH_FETCH_USER_REQUEST':
      return {
        ...state, 
        fetchingUser: true,
      }
    case 'AUTH_FETCH_USER_SUCCESS':
      return {
        ...state, 
        user: action.user,
        fetchingUser: false,
      }
    case 'AUTH_FETCH_USER_FAILURE':
      return {
        ...state, 
        fetchingUser: false,
      }
    case 'AUTH_SIGN_IN_REQUEST':
      return {
        ...state, 
        signingIn: true,
      }
    case 'AUTH_SIGN_IN_SUCCESS':
      const { user } = state
      return {
        ...state, 
        user: {
          ...user, 
          ...action.user,
        },
        credentials: action.credentials,
        signingIn: false,
      }
    case 'AUTH_SIGN_IN_FAILURE':
      return {
        ...state, 
        signingIn: false,
      }
    case 'AUTH_SIGN_IN_ERROR':
      return {
        ...state, 
        signingIn: false,
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  auth,
})

export default reducer
