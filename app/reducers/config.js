const initialState = {
  confirmingEmail: false,
  confirmEmailError: null,
  updatingEmail: false,
  updateEmailError: null,
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case 'CONFIG_CONFIRM_EMAIL_REQUEST':
      return {
        ...state, 
        confirmingEmail: true,
        confirmEmailError: null,
        updateEmailError: null,
      }
    case 'CONFIG_CONFIRM_EMAIL_SUCCESS':
      return {
        ...state, 
        confirmingEmail: false,
        confirmEmailError: null,
        updateEmailError: null,
      }
    case 'CONFIG_CONFIRM_EMAIL_FAILURE':
      return {
        ...state, 
        confirmingEmail: false,
        confirmEmailError: action.error,
      }
    case 'CONFIG_UPDATE_EMAIL_REQUEST':
      return {
        ...state, 
        updatingEmail: true,
        confirmEmailError: null,
        updateEmailError: null,
      }
    case 'CONFIG_UPDATE_EMAIL_SUCCESS':
      return {
        ...state, 
        updatingEmail: false,
        confirmEmailError: null,
        updateEmailError: null,
      }
    case 'CONFIG_UPDATE_EMAIL_FAILURE':
      return {
        ...state, 
        updatingEmail: false,
        updateEmailError: action.error,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
