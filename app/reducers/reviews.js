import moment from 'moment'

const initialState = {
  user: null,
  list: [],
  listing: true,
  offset: 0,
  canList: false,
}

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'REVIEWS_LIST_REQUEST':
      return {
        ...state, 
        list: (action.offset === 0 ? [] : state.list),
        listing: true,
        user: action.user,
      }
    case 'REVIEWS_LIST_SUCCESS':
      return {
        ...state, 
        list: state.list.concat(action.list),
        listing: false,
        offset: state.offset + action.list.length,
        canList: (action.list.length >= 10 ? true : false),
      }
    case 'REVIEWS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
      }
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
