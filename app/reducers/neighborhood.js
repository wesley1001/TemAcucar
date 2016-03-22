const initialState = {
  drawerOpen: false,
  users: [],
  demands: [],
  loadingUsers: true,
  loadingDemands: true,
  demandsOffset: 0,
  canLoadMoreDemands: false,
  creatingDemand: false,
  createDemandError: null,
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
    case 'NEIGHBORHOOD_LIST_DEMANDS_REQUEST':
      return {
        ...state, 
        loadingDemands: true,
      }
    case 'NEIGHBORHOOD_LIST_USERS_REQUEST':
      return {
        ...state, 
        loadingUsers: true,
      }
    case 'NEIGHBORHOOD_LIST_USERS_SUCCESS':
      return {
        ...state, 
        users: action.users,
        loadingUsers: false,
      }
    case 'NEIGHBORHOOD_LIST_USERS_FAILURE':
      return {
        ...state, 
        loadingUsers: false,
      }
    case 'NEIGHBORHOOD_LIST_DEMANDS_REQUEST':
      return {
        ...state, 
        loadingDemands: true,
      }
    case 'NEIGHBORHOOD_LIST_DEMANDS_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands),
        loadingDemands: false,
        demandsOffset: state.demandsOffset + action.demands.length,
        canLoadMoreDemands: (action.demands.length >= 10 ? true : false),
      }
    case 'NEIGHBORHOOD_LIST_DEMANDS_FAILURE':
      return {
        ...state, 
        loadingDemands: false,
      }
    case 'NEIGHBORHOOD_REFUSE_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'NEIGHBORHOOD_FLAG_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'NEIGHBORHOOD_CREATE_DEMAND_REQUEST':
      return {
        ...state, 
        creatingDemand: true,
      }
    case 'NEIGHBORHOOD_CREATE_DEMAND_SUCCESS':
      return {
        ...state, 
        demands: [action.demand].concat(state.demands),
        demandsOffset: state.demandsOffset + 1,
        creatingDemand: false,
      }
    case 'NEIGHBORHOOD_CREATE_DEMAND_FAILURE':
      return {
        ...state, 
        creatingDemand: false,
        createDemandError: action.error,
      }
    default:
      return state
  }
}
