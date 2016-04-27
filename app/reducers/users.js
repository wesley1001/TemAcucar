const initialState = {
  list: [],
  startingUp: true,
  listing: false,
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
        startingUp: false,
      }
    case 'USERS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
        startingUp: false,
      }
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return initialState
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
