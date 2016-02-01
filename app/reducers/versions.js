const initialState = {
  startingUp: true,
  list: [],
  listing: false,
  listError: null,
  ignoreUpdate: false,
}

export default function versions(state = initialState, action) {
  switch (action.type) {
    case 'VERSIONS_LIST_REQUEST':
      return {
        ...state, 
        listing: true,
      }
    case 'VERSIONS_LIST_SUCCESS':
      return {
        ...state,
        list: action.list,
        listing: false,
        startingUp: false,
      }
    case 'VERSIONS_LIST_FAILURE':
      return {
        ...state, 
        listing: false,
        startingUp: false,
      }
    case 'VERSIONS_IGNORE_UPDATE':
      return {
        ...state, 
        ignoreUpdate: true,
      }
    default:
      return state
  }
}
