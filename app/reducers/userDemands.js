const initialState = {
  list: [],
  listing: true,
  offset: 0,
  canList: false,
}

export default function userDemands(state = initialState, action) {
  switch (action.type) {
    case 'USER_DEMANDS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'USER_DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'USER_DEMANDS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'DEMANDS_CREATE_SUCCESS':
      return {
        ...state, 
        list: [action.demand].concat(state.list),
        offset: state.offset + 1,
      }
    case 'DEMANDS_COMPLETE_REQUEST':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, completing: true}
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_COMPLETE_SUCCESS':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return action.demand
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_COMPLETE_FAILURE':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, completing: false}
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_CANCEL_REQUEST':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, canceling: true}
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_CANCEL_SUCCESS':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return action.demand
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_CANCEL_FAILURE':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, canceling: false}
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_REACTIVATE_REQUEST':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, reactivating: true}
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_REACTIVATE_SUCCESS':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return action.demand
          } else {
            return demand
          }
        }),
      }
    case 'DEMANDS_REACTIVATE_FAILURE':
      return {
        ...state, 
        list: state.list.map(demand => {
          if (demand.id === action.demand.id) {
            return {...demand, reactivating: false}
          } else {
            return demand
          }
        }),
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
