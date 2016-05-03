import React, { Component, BackAndroid } from 'react-native'
import { Actions, Router as ReactNativeRouter } from 'react-native-router-flux'
import Colors from "../Colors"

export default class Router extends Component {
  componentWillMount () {
    this.backHandler = this.handleBack.bind(this)
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler)
  }

  handleBack() {
    const { router: { stack } } = this.refs.router
    if ( stack.length > 1 ) {
      Actions.pop()
      return true
    }
    return false
  }

  render() {
    return (
      <ReactNativeRouter 
        ref="router"
        hideNavBar={true}
        { ...this.props }
      >
        { this.props.children }
      </ReactNativeRouter>
    )
  }
}
