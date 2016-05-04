import { AppRegistry } from 'react-native'
import Config from 'react-native-config'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import ProviderContainer from './app/containers/ProviderContainer'

GoogleAnalytics.setTrackerId(Config.GOOGLE_ANALYTICS_ID_IOS)
AppRegistry.registerComponent('TemAcucar', () => ProviderContainer)
