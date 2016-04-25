import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import toast from './reducers/toast'
import versions from './reducers/versions'
import auth from './reducers/auth'
import terms from './reducers/terms'
import config from './reducers/config'
import location from './reducers/location'
import dashboard from './reducers/dashboard'
import users from './reducers/users'
import demands from './reducers/demands'
import userDemands from './reducers/userDemands'
import adminDemands from './reducers/adminDemands'
import flaggedDemands from './reducers/flaggedDemands'
import transactions from './reducers/transactions'
import messages from './reducers/messages'
import reviews from './reducers/reviews'
import unreadNotifications from './reducers/unreadNotifications'
import readNotifications from './reducers/readNotifications'

const reducer = combineReducers({
  form: formReducer,
  toast,
  versions,
  auth,
  terms,
  config,
  location,
  dashboard,
  demands,
  userDemands,
  adminDemands,
  flaggedDemands,
  users,
  transactions,
  messages,
  reviews,
  unreadNotifications,
  readNotifications,
})

export default reducer
