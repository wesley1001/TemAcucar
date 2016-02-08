import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducer'
import VersionChecker from './VersionChecker'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <VersionChecker />
      </Provider>
    )
  }
}
