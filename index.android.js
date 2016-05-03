import { AppRegistry } from 'react-native'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'
import GcmContainer from './app/containers/GcmContainer'

const notification = GcmAndroid.launchNotification
if (notification) {
  Notification.create({
    message: notification.text,
  })
  GcmAndroid.stopService()
} else {
  AppRegistry.registerComponent('TemAcucar', () => GcmContainer)
}
