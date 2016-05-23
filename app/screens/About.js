import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Package from '../../package.json'
import Config from 'react-native-config'

import SimpleScreen from "../components/SimpleScreen"

export default class About extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('About')
  }

  render() {
    return (
      <SimpleScreen headline="Sobre" navBar={true} navBarTitle="Sobre">
        <Sentence style={{marginBottom: 20}}>
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Versão compilada:</Text> {Config.BUILD}
        </Sentence>
        <Sentence>
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Versão JavaScript:</Text> {Package.version}
        </Sentence>
      </SimpleScreen>
    )
  }
}
