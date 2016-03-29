import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'
import config from './reducers/config'
import location from './reducers/location'
import dashboard from './reducers/dashboard'
import users from './reducers/users'
import demands from './reducers/demands'
import transactions from './reducers/transactions'
import messages from './reducers/messages'

const reducer = combineReducers({
  form: formReducer,
  versions,
  auth,
  terms,
  config,
  location,
  dashboard,
  demands,
  users,
  transactions,
  messages,
})

export default reducer
