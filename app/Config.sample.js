import React, { Platform } from 'react-native'
import AndroidConfig from 'react-native-android-config'

const Config = {
  apiUrl: 'http://localhost:5000',
  apiUrl: (Platform.OS == 'android' ? AndroidConfig.API_URL : 'http://192.168.0.136:5000'),
  // apiUrl: 'https://tem-acucar-api-staging.herokuapp.com',
  // TODO use our app's URL
  appStoreUrl: 'https://itunes.apple.com/app/id567264775?mt=8',
  // TODO use our app's URL
  playStoreUrl: 'https://play.google.com/store/apps/details?id=br.com.easytaxi',
}

export default Config