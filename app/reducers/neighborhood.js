const initialState = {
  drawerOpen: false,
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
    default:
      return state
  }
}
