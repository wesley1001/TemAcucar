const initialState = {
  drawerOpen: false,
  delta: 0.02,
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
    case 'NEIGHBORHOOD_SET_DELTA':
      return {
        ...state, 
        delta: action.delta,
      }
    default:
      return state
  }
}
