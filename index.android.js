import { AppRegistry } from 'react-native'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'

const notification = GcmAndroid.launchNotification
if (notification) {
  Notification.create({
    subject: notification.subject,
    message: notification.text,
  })
  GcmAndroid.stopService()
} else {
  const ProviderContainer = require('./app/containers/ProviderContainer')
  AppRegistry.registerComponent('TemAcucar', () => ProviderContainer)
}
