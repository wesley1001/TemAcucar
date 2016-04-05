import moment from 'moment'

const initialState = {
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
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
