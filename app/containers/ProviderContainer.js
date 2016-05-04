import React, { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducer'
import GcmContainer from './GcmContainer'
import ToastContainer from './ToastContainer'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}

const store = configureStore()
const Container = (Platform.OS === 'ios' ? ToastContainer : GcmContainer)

// This old style module.exports is needed because we cannot use import on index.android.js. That's the only way to work with GCM notifications.
var ProviderContainer = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)
module.exports = ProviderContainer
