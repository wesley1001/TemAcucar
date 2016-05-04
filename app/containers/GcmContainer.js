import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'

import * as GcmActions from '../actions/GcmActions'
import ToastContainer from './ToastContainer'

class GcmContainer extends Component {
  componentDidMount() {
    GcmAndroid.addEventListener('register', (token) => {
      const { dispatch } = this.props
      dispatch(GcmActions.register(token))
    })   
    GcmAndroid.addEventListener('notification', (notification) => {
      Notification.create({
        message: notification.data.text,
      })
    })
    GcmAndroid.requestPermissions()
  }

  render() {
    return (<ToastContainer {...this.props} />)
  }
}

export default connect(state => ({
  gcm: state.gcm,
}))(GcmContainer)
