const initialState = {
  acceptingTerms: false,
  acceptTermsError: null,
  rejectedTerms: false,
  scrolledToBottom: false,
}

export default function terms(state = initialState, action) {
  switch (action.type) {
    case 'TERMS_ACCEPT_REQUEST':
      return {
        ...state, 
        acceptingTerms: true,
      }
    case 'TERMS_ACCEPT_SUCCESS':
      return {
        ...state, 
        acceptingTerms: false,
      }
    case 'TERMS_ACCEPT_FAILURE':
      return {
        ...state, 
        acceptingTerms: false,
        acceptTermsError: action.error,
      }
    case 'TERMS_REJECT':
      return {
        ...state, 
        rejectedTerms: true,
      }
    case 'TERMS_CANCEL_REJECT':
      return {
        ...state, 
        rejectedTerms: false,
      }
    case 'TERMS_SCROLL_TO_BOTTOM':
      return {
        ...state, 
        scrolledToBottom: true,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
