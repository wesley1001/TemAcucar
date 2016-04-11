import moment from 'moment'

const initialState = {
  transaction: null,
  list: [],
  listing: true,
  offset: 0,
  canList: false,
  creating: false,
  createError: null,
}

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES_LIST_REQUEST':
      return {
        ...state, 
        list: (action.offset === 0 ? [] : state.list),
        listing: true,
        transaction: action.transaction,
      }
    case 'MESSAGES_LIST_SUCCESS':
      return {
        ...state, 
        list: action.list.reverse().concat(state.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'MESSAGES_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'MESSAGES_CREATE_REQUEST':
      const createdAt = moment().format()
      return {
        ...state,
        list: state.list.concat([{
          id: createdAt,
          user_id: action.currentUser.id,
          text: action.message.text,
          created_at: createdAt,
        }]),
        offset: state.offset + 1,
        creating: true,
        createError: null,
      }
    case 'MESSAGES_CREATE_SUCCESS':
      return {
        ...state, 
        creating: false,
        createError: null,
      }
    case 'MESSAGES_CREATE_FAILURE':
      return {
        ...state,
        creating: false,
        createError: action.error,
      }
    case 'UNREAD_NOTIFICATIONS_LIST_SUCCESS':
      if (!state.transaction || state.listing)
        return state
      const newMessages = action.list.filter(notification => (
        notification.message && 
        notification.transaction.id === state.transaction.id &&
        state.list.map(message => message.id).indexOf(notification.message.id) < 0
      )).map(notification => notification.message)
      return {
        ...state,
        list: state.list.concat(newMessages)
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
