const initialState = {
  confirmingEmail: false,
  confirmEmailError: null,
}

export default function terms(state = initialState, action) {
  switch (action.type) {
    case 'CONFIG_CONFIRM_EMAIL_REQUEST':
      return {
        ...state, 
        confirmingEmail: true,
      }
    case 'CONFIG_CONFIRM_EMAIL_SUCCESS':
      return {
        ...state, 
        confirmingEmail: false,
      }
    case 'CONFIG_CONFIRM_EMAIL_FAILURE':
      return {
        ...state, 
        confirmingEmail: false,
        confirmEmailError: action.error,
      }
    default:
      return state
  }
}
