const initialState = {
  list: [],
  listing: true,
}

export default function unreadNotifications(state = initialState, action) {
  switch (action.type) {
    case 'UNREAD_NOTIFICATIONS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'UNREAD_NOTIFICATIONS_LIST_SUCCESS':
      return {
        ...state, 
        list: action.list,
        listing: false,
      }
    case 'UNREAD_NOTIFICATIONS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_REQUEST':
      return {
        ...state, 
        list: [],
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
