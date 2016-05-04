import { AppRegistry } from 'react-native'
import Config from 'react-native-config'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
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
  GoogleAnalytics.setTrackerId(Config.GOOGLE_ANALYTICS_ID_ANDROID)
  AppRegistry.registerComponent('TemAcucar', () => ProviderContainer)
}
