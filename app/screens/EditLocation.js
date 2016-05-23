import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import GiftedSpinner from 'react-native-gifted-spinner'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import SetLocation from "../components/SetLocation"

export default class EditLocation extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('EditLocation')
  }

  render() {
    const { location: { startingUp } } = this.props
    return(
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="Alterar endereço" />
        { startingUp ? <GiftedSpinner style={{ marginTop: 20 }} /> : <SetLocation {...this.props} /> }
      </View>
    )
  }
}
