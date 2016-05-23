const initialState = {
  list: [],
  startingUp: true,
  listing: false,
  listError: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'USERS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
        listError: null,
      }
    case 'USERS_LIST_SUCCESS':
      return {
        ...state, 
        list: action.list,
        listing: false,
        startingUp: false,
        listError: null,
      }
    case 'USERS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
        startingUp: false,
        listError: action.error,
      }
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return initialState
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
