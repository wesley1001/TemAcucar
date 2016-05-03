const initialState = {
  creating: false,
  createError: null,
  lastCreated: null,
}

export default function createdReview(state = initialState, action) {
  switch (action.type) {
    case 'REVIEWS_CREATE_REQUEST':
      return {
        ...state, 
        lastCreated: null,
        creating: true,
        createError: null,
      }
    case 'REVIEWS_CREATE_SUCCESS':
      return {
        ...state, 
        lastCreated: action.review,
        creating: false,
        createError: null,
      }
    case 'REVIEWS_CREATE_FAILURE':
      return {
        ...state, 
        creating: false,
        createError: action.error,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
