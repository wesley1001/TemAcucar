const initialState = {
  drawerOpen: false,
  users: [],
  demands: [],
  loadingUsers: true,
  loadingDemands: true,
  demandsOffset: 0,
  canLoadMoreDemands: false,
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
    case 'NEIGHBORHOOD_DEMANDS_LIST_REQUEST':
      return {
        ...state, 
        loadingDemands: true,
      }
    case 'NEIGHBORHOOD_DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands),
        loadingDemands: false,
        demandsOffset: state.demandsOffset + action.demands.length,
        canLoadMoreDemands: (action.demands.length >= 10 ? true : false),
      }
    case 'NEIGHBORHOOD_DEMANDS_LIST_FAILURE':
      return {
        ...state, 
        loadingDemands: false,
      }
    case 'NEIGHBORHOOD_DEMANDS_REFUSE_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'NEIGHBORHOOD_DEMANDS_FLAG_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    default:
      return state
  }
}
