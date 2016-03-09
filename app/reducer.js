import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'
import config from './reducers/config'
import location from './reducers/location'
import neighborhood from './reducers/neighborhood'

const reducer = combineReducers({
  form: formReducer,
  versions,
  auth,
  terms,
  config,
  location,
  neighborhood,
})

export default reducer
