import { AppRegistry } from 'react-native'
import Config from 'react-native-config'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'

const notification = GcmAndroid.launchNotification
if (notification) {
  Notification.create({
    subject: notification.subject,
    message: notification.sanitized_text,
  })
  GcmAndroid.stopService()
} else {
  const ProviderContainer = require('./app/containers/ProviderContainer')
  const GoogleAnalytics = require('react-native-google-analytics-bridge')
  GoogleAnalytics.setTrackerId(Config.GOOGLE_ANALYTICS_ID_ANDROID)
  AppRegistry.registerComponent('TemAcucar', () => ProviderContainer)
}
