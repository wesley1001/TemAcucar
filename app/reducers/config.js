const initialState = {
  confirmingEmail: false,
  confirmEmailError: null,
  updateEmail: false,
  updatingEmail: false,
  updateEmailError: null,
}

export default function terms(state = initialState, action) {
  switch (action.type) {
    case 'CONFIG_CONFIRM_EMAIL_REQUEST':
      return {
        ...state, 
        confirmingEmail: true,
        updateEmail: false,
      }
    case 'CONFIG_CONFIRM_EMAIL_SUCCESS':
      return {
        ...state, 
        confirmingEmail: false,
        confirmEmailError: null,
      }
    case 'CONFIG_CONFIRM_EMAIL_FAILURE':
      return {
        ...state, 
        confirmingEmail: false,
        confirmEmailError: action.error,
      }
    case 'CONFIG_DO_UPDATE_EMAIL':
      return {
        ...state, 
        updateEmail: true,
      }
    case 'CONFIG_UPDATE_EMAIL_REQUEST':
      return {
        ...state, 
        updatingEmail: true,
      }
    case 'CONFIG_UPDATE_EMAIL_SUCCESS':
      return {
        ...state, 
        updatingEmail: false,
        updateEmail: false,
        updateEmailError: null,
      }
    case 'CONFIG_UPDATE_EMAIL_FAILURE':
      return {
        ...state, 
        updatingEmail: false,
        updateEmailError: action.error,
      }
    default:
      return state
  }
}
