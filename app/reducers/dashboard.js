const initialState = {
  drawerOpen: false,
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_OPEN_DRAWER':
      return {
        ...state, 
        drawerOpen: true,
      }
    case 'DASHBOARD_CLOSE_DRAWER':
      return {
        ...state, 
        drawerOpen: false,
      }
    default:
      return state
  }
}
