const initialState = {
  drawerOpen: false,
  demands: [],
  loadingDemands: true,
  demandsOffset: 0,
  canLoadMoreDemands: false,
  creatingDemand: false,
  createDemandError: null,
  createdDemand: null,
  creatingTransaction: false,
  createTransactionError: null,
  createdTransaction: null,
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
    case 'DASHBOARD_LIST_DEMANDS_REQUEST':
      return {
        ...state, 
        loadingDemands: true,
      }
    case 'DASHBOARD_LIST_DEMANDS_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands),
        loadingDemands: false,
        demandsOffset: state.demandsOffset + action.demands.length,
        canLoadMoreDemands: (action.demands.length >= 10 ? true : false),
      }
    case 'DASHBOARD_LIST_DEMANDS_FAILURE':
      return {
        ...state, 
        loadingDemands: false,
      }
    case 'DASHBOARD_REFUSE_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'DASHBOARD_FLAG_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'DASHBOARD_CREATE_DEMAND_REQUEST':
      return {
        ...state, 
        createdDemand: null,
        creatingDemand: true,
      }
    case 'DASHBOARD_CREATE_DEMAND_SUCCESS':
      return {
        ...state, 
        createdDemand: action.demand,
        creatingDemand: false,
      }
    case 'DASHBOARD_CREATE_DEMAND_FAILURE':
      return {
        ...state, 
        creatingDemand: false,
        createDemandError: action.error,
      }
    case 'TRANSACTIONS_CREATE_REQUEST':
      return {
        ...state, 
        demands: state.demands.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: true}
          } else {
            return demand
          }
        }),
        creatingTransaction: true,
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.transaction.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
        createTransactionError: null,
        creatingTransaction: false,
        createdTransaction: action.transaction,
      }
    case 'TRANSACTIONS_CREATE_FAILURE':
      return {
        ...state, 
        demands: state.demands.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: false}
          } else {
            return demand
          }
        }),
        createTransactionError: action.error,
        creatingTransaction: false,
      }
    case 'AFTER_ROUTER_ROUTE':
      return {
        ...state, 
        createdDemand: null,
        createdTransaction: null,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
