const initialState = {
  users: [],
  loading: true,
}

export default function neighbors(state = initialState, action) {
  switch (action.type) {
    case 'NEIGHBORS_LIST_REQUEST':
      return {
        ...state, 
        loading: true,
      }
    case 'NEIGHBORS_LIST_SUCCESS':
      return {
        ...state, 
        users: action.users,
        loading: false,
      }
    case 'NEIGHBORS_LIST_FAILURE':
      return {
        ...state, 
        loading: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
