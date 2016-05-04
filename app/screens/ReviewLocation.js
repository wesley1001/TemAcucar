import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Colors from "../Colors"
import BorderedScreen from "../components/BorderedScreen"
import SetLocationHeader from "../components/SetLocationHeader"
import SetLocation from "../components/SetLocation"

export default class ReviewLocation extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ReviewLocation')
  }

  render() {
    return(
      <BorderedScreen>
        <SetLocationHeader />
        <SetLocation {...this.props} />
      </BorderedScreen>
    )
  }
}
