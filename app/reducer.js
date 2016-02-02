import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'
import config from './reducers/config'
import location from './reducers/location'

const reducer = combineReducers({
  versions,
  auth,
  terms,
  config,
  location,
  form,
})

export default reducer
