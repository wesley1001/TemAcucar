import React, { Component } from 'react-native'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'
import ProviderContainer from './ProviderContainer'

export default class GcmContainer extends Component {
  componentDidMount() {
    GcmAndroid.addEventListener('register', (token) => {
      console.log('GCM register', token)
      // TODO store token in state and then send to the server after auth
    })   
    GcmAndroid.addEventListener('notification', (notification) => {
      Notification.create({
        message: notification.data.text,
      })
    })
    GcmAndroid.requestPermissions()
  }

  render() {
    return (<ProviderContainer />)
  }
}
