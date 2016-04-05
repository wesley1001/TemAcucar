const initialState = {
  list: [],
  listing: true,
  offset: 0,
  canList: false,
}

export default function userDemands(state = initialState, action) {
  switch (action.type) {
    case 'USER_DEMANDS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'USER_DEMANDS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'USER_DEMANDS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'DEMANDS_CREATE_SUCCESS':
      return {
        ...state, 
        list: [action.demand].concat(state.list),
        offset: state.offset + 1,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
