import React, { Component } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class Welcome extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Welcome')
  }

  render() {
    return(
      <SimpleScreen headline="Compartilhe coisas com seus vizinhos">
        <Button onPress={Actions.signUp}>
          Quero me cadastrar
        </Button>
        <OrSeparator />
        <Button onPress={Actions.signIn} style={{paddingHorizontal: 35}}>
          Já tenho cadastro
        </Button>
      </SimpleScreen>
    )
  }
}
