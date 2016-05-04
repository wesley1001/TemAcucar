import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import TextBox from "../components/TextBox"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class ReviewEmail extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ReviewEmail')
  }

  render() {
    const { auth: { currentUser: { email } }, onConfirm } = this.props
    return(
      <SimpleScreen>
        <Headline style={{fontSize: 14, marginBottom: 10}}>{email}</Headline>
        <TextBox style={{marginBottom: 20}}>
          Você usa esse e-mail diariamente? Não vamos te mandar spam mas precisamos do seu e-mail para te conectar com seus vizinhos.
        </TextBox>
        <Button onPress={onConfirm}>
          Sim, uso este e-mail
        </Button>
        <OrSeparator />
        <Button onPress={Actions.updateEmail} style={{paddingHorizontal: 34}}>
          Não, quero alterar
        </Button>
      </SimpleScreen>
    )
  }
}
