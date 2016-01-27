import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './reducers/auth'
import terms from './reducers/terms'

const reducer = combineReducers({
  auth,
  terms,
  form
})

export default reducer
