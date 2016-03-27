const initialState = {
  demands: [],
  loading: true,
  loadTransactions: false,
  offset: 0,
  canLoadMore: false,
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case 'TRANSACTIONS_LIST_DEMANDS_REQUEST':
      return {
        ...state, 
        loading: true,
      }
    case 'TRANSACTIONS_LIST_DEMANDS_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands.map(demand => {
          return { ...demand, transactions: [] }
        })),
        loading: false,
        loadTransactions: true,
        offset: state.offset + action.demands.length,
        canLoadMore: (action.demands.length >= 10 ? true : false),
      }
    case 'TRANSACTIONS_LIST_DEMANDS_FAILURE':
      return {
        ...state, 
        loading: false,
      }
    case 'TRANSACTIONS_LIST_TRANSACTIONS_REQUEST':
      return {
        ...state, 
        loadTransactions: false,
      }
    case 'TRANSACTIONS_LIST_TRANSACTIONS_SUCCESS':
      return {
        ...state, 
        demands: state.demands.map(demand => {
          const { transactions } = action
          if (transactions.length > 0) {
            if (transactions[0].demand.id === demand.id) {
              return { ...demand, transactions: transactions }
            } else {
              return demand
            }
          } else {
            return demand
          }
        }),
      }
    case 'TRANSACTIONS_CREATE_SUCCESS':
      const { transaction } = action
      return {
        ...state, 
        demands: [{
          ...transaction.demand,
          transactions: [transaction],
        }].concat(state.demands),
        offset: state.offset + 1,
        creating: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
