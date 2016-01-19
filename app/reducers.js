import { combineReducers } from 'redux'

function currentUser(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.user
    default:
      return state
  }
}

const reducer = combineReducers({
  currentUser,
})

export default reducer
