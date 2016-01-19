import { combineReducers } from 'redux'

function currentUser(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  currentUser,
})

export default reducer
