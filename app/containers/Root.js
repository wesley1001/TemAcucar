import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import TemAcucar from './TemAcucar'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <TemAcucar />
      </Provider>
    )
  }
}
