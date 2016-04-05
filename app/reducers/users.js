const initialState = {
  list: [],
  listing: true,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'USERS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'USERS_LIST_SUCCESS':
      return {
        ...state, 
        list: action.list,
        listing: false,
      }
    case 'USERS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
