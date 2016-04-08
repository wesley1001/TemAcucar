const initialState = {
  list: [],
  count: 0,
  listing: false,
  readingAll: false,
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
        count: action.list.length,
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
        count: 0,
        readingAll: true,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_SUCCESS':
      return {
        ...state, 
        list: [],
        readingAll: false,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_FAILURE':
      return {
        ...state, 
        readingAll: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
