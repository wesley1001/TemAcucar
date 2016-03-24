const initialState = {
  messages: [],
  loading: true,
  offset: 0,
  canLoadMore: false,
}

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES_LIST_REQUEST':
      return {
        ...state, 
        loading: true,
      }
    case 'MESSAGES_LIST_SUCCESS':
      return {
        ...state, 
        messages: action.messages.reverse().concat(state.messages),
        loading: false,
        offset: state.offset + action.messages.length,
        canLoadMore: (action.messages.length >= 10 ? true : false),
      }
    case 'MESSAGES_LIST_FAILURE':
      return {
        ...state, 
        loading: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
