const initialState = {
  list: [],
  listing: false,
  offset: 0,
  canList: false,
  creating: false,
  createError: null,
  lastCreated: null,
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case 'TRANSACTIONS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'TRANSACTIONS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'TRANSACTIONS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'TRANSACTIONS_CREATE_REQUEST':
      return {
        ...state, 
        lastCreated: null,
        creating: true,
        createError: null,
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      const { transaction } = action
      return {
        ...state, 
        list: [{
          ...transaction.demand,
          transactions: [transaction],
        }].concat(state.list),
        offset: state.offset + 1,
        lastCreated: transaction,
        creating: false,
        createError: null,
      }
    case 'TRANSACTIONS_CREATE_FAILURE':
      return {
        ...state, 
        creating: false,
        createError: action.error,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
