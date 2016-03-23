const initialState = {
  demands: [],
  loading: true,
  offset: 0,
  canLoadMore: false,
}

export default function transactionDemands(state = initialState, action) {
  switch (action.type) {
    case 'TRANSACTION_DEMANDS_LIST_REQUEST':
      return {
        ...state, 
        loading: true,
      }
    case 'TRANSACTION_DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands),
        loading: false,
        offset: state.offset + action.demands.length,
        canLoadMore: (action.demands.length >= 10 ? true : false),
      }
    case 'TRANSACTION_DEMANDS_LIST_FAILURE':
      return {
        ...state, 
        loading: false,
      }
    default:
      return state
  }
}
