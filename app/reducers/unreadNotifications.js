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
      if (state.readingAll)
        return state
      const newNotifications = action.list.filter(notification => (
        state.list.map(notification => notification.id).indexOf(notification.id) < 0
      ))
      const notifications = newNotifications.concat(state.list)
      return {
        ...state, 
        list: notifications,
        count: notifications.filter(notification => !notification.read).length,
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
        list: [],
        readingAll: true,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_SUCCESS':
      return {
        ...state, 
        readingAll: false,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_FAILURE':
      return {
        ...state, 
        readingAll: false,
      }
    case 'UNREAD_NOTIFICATIONS_READ_REQUEST':
      return {
        ...state, 
        count: (state.count > 0 ? state.count - 1 : state.count),
        list: state.list.map(notification => {
          if (notification.id === action.notification.id) {
            return { ...action.notification, read: true }
          } else {
            return notification
          }
        }),
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
