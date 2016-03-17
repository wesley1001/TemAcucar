const initialState = {
  drawerOpen: false,
  users: [],
}

export default function terms(state = initialState, action) {
  switch (action.type) {
    case 'NEIGHBORHOOD_OPEN_DRAWER':
      return {
        ...state, 
        drawerOpen: true,
      }
    case 'NEIGHBORHOOD_CLOSE_DRAWER':
      return {
        ...state, 
        drawerOpen: false,
      }
    case 'NEIGHBORHOOD_USERS_LIST_SUCCESS':
      return {
        ...state, 
        users: action.users,
      }
    default:
      return state
  }
}
