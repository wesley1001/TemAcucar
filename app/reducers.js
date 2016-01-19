import { combineReducers } from 'redux'

function currentUser(state = null, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.user
    default:
      return state
  }
}

function credentials(state = null, action) {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  currentUser,
  credentials,
})

export default reducer
