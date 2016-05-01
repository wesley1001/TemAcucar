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
            return { ...action.demand, transactions: demand.transactions }
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
            return { ...action.demand, transactions: demand.transactions }
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
            return { ...action.demand, transactions: demand.transactions }
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
    case 'MESSAGES_CREATE_REQUEST':
      return {
        ...state,
        list: state.list.map(demand => {
          return {
            ...demand,
            transactions: demand.transactions.map(transaction => {
              if (transaction.id === action.message.transaction_id) {
                return { ...transaction, last_message_text: action.message.text }
              } else {
                return transaction
              }
            })
          }
        }),
      }
    case 'UNREAD_NOTIFICATIONS_LIST_SUCCESS':
      if (state.listing)
        return state
      const newTransactions = action.list.filter(notification => (
        notification.message && 
        notification.transaction &&
        [].concat(...state.list.map(demand => demand.transactions)).map(transaction => transaction.id).indexOf(notification.transaction.id) < 0
      )).map(notification => notification.transaction)
      const newDemands = newTransactions.map(transaction => {
        let transactions = []
        const index = state.list.map(demand => demand.id).indexOf(transaction.demand.id)
        if (index > -1)
          transactions = state.list[index].transactions
        return { ...transaction.demand, transactions: [transaction].concat(transactions) }
      })
      const oldDemands = state.list.filter(demand => (
        newDemands.map(newDemand => newDemand.id).indexOf(demand.id) < 0
      ))
      return {
        ...state,
        list: newDemands.concat(oldDemands.map(demand => {
          return {
            ...demand,
            transactions: demand.transactions.map(transaction => {
              const notifications = action.list.filter(notification => (notification.message && notification.transaction))
              const index = notifications.map(notification => notification.transaction.id).indexOf(transaction.id)
              if (index > -1) {
                return notifications[index].transaction
              } else {
                return transaction
              }
            })
          }
        }))
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
