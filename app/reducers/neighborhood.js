const initialState = {
  drawerOpen: false,
  users: [],
  demands: [],
  loadingUsers: true,
  loadingDemands: true,
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
        loadingUsers: false,
      }
    case 'NEIGHBORHOOD_DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        demands: action.demands,
        loadingDemands: false,
      }
    default:
      return state
  }
}
