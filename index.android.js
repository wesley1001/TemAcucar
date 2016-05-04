import { AppRegistry } from 'react-native'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'
import ProviderContainer from './app/containers/ProviderContainer'

const notification = GcmAndroid.launchNotification
if (notification) {
  Notification.create({
    message: notification.text,
  })
  GcmAndroid.stopService()
} else {
  AppRegistry.registerComponent('TemAcucar', () => ProviderContainer)
}
