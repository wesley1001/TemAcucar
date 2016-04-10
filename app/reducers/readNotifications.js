const initialState = {
  list: [],
  listing: true,
  offset: 0,
  canList: false,
}

export default function readNotifications(state = initialState, action) {
  switch (action.type) {
    case 'READ_NOTIFICATIONS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'READ_NOTIFICATIONS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'READ_NOTIFICATIONS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'UNREAD_NOTIFICATIONS_READ_ALL_SUCCESS':
      return {
        ...state, 
        list: action.list.concat(state.list),
        offset: state.offset + action.list.length,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
