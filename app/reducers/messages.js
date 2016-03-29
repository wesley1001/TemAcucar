const initialState = {
  messages: [],
  loading: true,
  offset: 0,
  canLoadMore: false,
  creating: false,
}

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES_LIST_REQUEST':
      return {
        ...state, 
        messages: (action.offset === 0 ? [] : state.messages),
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
    case 'MESSAGES_CREATE_REQUEST':
      return {
        ...state,
        creating: true,
      }
    case 'MESSAGES_CREATE_SUCCESS':
      return {
        ...state, 
        messages: state.messages.concat(action.message),
        offset: state.offset + 1,
        creating: false,
      }
    case 'MESSAGES_CREATE_FAILURE':
      return {
        ...state,
        creating: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
