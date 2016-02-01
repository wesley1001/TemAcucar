import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'

const reducer = combineReducers({
  versions,
  auth,
  terms,
  form,
})

export default reducer
