const initialState = {
  list: [],
  startingUp: true,
  listing: false,
  offset: 0,
  canList: false,
  creating: false,
  createError: null,
  lastCreated: null,
}

export default function demands(state = initialState, action) {
  switch (action.type) {
    case 'DEMANDS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
        startingUp: false,
      }
    case 'DEMANDS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
        startingUp: false,
      }
    case 'DEMANDS_REFUSE_REQUEST':
      return {
        ...state, 
        list: state.list.filter(demand => action.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'DEMANDS_FLAG_REQUEST':
      return {
        ...state, 
        list: state.list.filter(demand => action.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'DEMANDS_CREATE_REQUEST':
      return {
        ...state, 
        lastCreated: null,
        creating: true,
        createError: null,
      }
    case 'DEMANDS_CREATE_SUCCESS':
      return {
        ...state, 
        lastCreated: action.demand,
        creating: false,
        createError: null,
      }
    case 'DEMANDS_CREATE_FAILURE':
      return {
        ...state, 
        creating: false,
        createError: action.error,
      }
    case 'TRANSACTIONS_CREATE_REQUEST':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: true}
          } else {
            return demand
          }
        }),
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      return {
        ...state, 
        list: state.list.filter(demand => action.transaction.demand.id !== demand.id),
        offset: state.offset - 1,
      }
    case 'TRANSACTIONS_CREATE_FAILURE':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, creatingTransaction: false}
          } else {
            return demand
          }
        }),
      }
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return initialState
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
