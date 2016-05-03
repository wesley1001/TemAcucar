const initialState = {
  demand: null,
  shouldGoToDashboard: false,
}

export default function viewDemand(state = initialState, action) {
  switch (action.type) {
    case 'VIEW_DEMAND_MOUNT':
      return {
        ...state, 
        demand: action.demand,
      }
    case 'VIEW_DEMAND_UNMOUNT':
      return initialState
    case 'DEMANDS_REFUSE_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        shouldGoToDashboard: true,
      }
    case 'DEMANDS_FLAG_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        shouldGoToDashboard: true,
      }
    case 'TRANSACTIONS_CREATE_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, creatingTransaction: true},
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: action.transaction.demand,
      }
    case 'TRANSACTIONS_CREATE_FAILURE':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, creatingTransaction: false},
      }
    case 'DEMANDS_COMPLETE_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, completing: true},
      }
    case 'DEMANDS_COMPLETE_SUCCESS':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: action.demand,
      }
    case 'DEMANDS_COMPLETE_FAILURE':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, completing: false},
      }
    case 'DEMANDS_CANCEL_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, canceling: true},
      }
    case 'DEMANDS_CANCEL_SUCCESS':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: action.demand,
      }
    case 'DEMANDS_CANCEL_FAILURE':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, canceling: false},
      }
    case 'DEMANDS_REACTIVATE_REQUEST':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, reactivating: true},
      }
    case 'DEMANDS_REACTIVATE_SUCCESS':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: action.demand,
      }
    case 'DEMANDS_REACTIVATE_FAILURE':
      if (!state.demand)
        return state
      return {
        ...state, 
        demand: {...state.demand, reactivating: false},
      }
    default:
      return state
  }
}
