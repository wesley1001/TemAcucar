import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'
import config from './reducers/config'
import location from './reducers/location'
import dashboard from './reducers/dashboard'
import neighbors from './reducers/neighbors'
import transactionDemands from './reducers/transactionDemands'

const reducer = combineReducers({
  form: formReducer,
  versions,
  auth,
  terms,
  config,
  location,
  dashboard,
  neighbors,
  transactionDemands,
})

export default reducer
