import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class SignInFailed extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignInFailed')
  }

  render() {
    return(
      <SimpleScreen headline="Ooops! Seu login falhou :(">
        <TextBox style={{marginBottom: 20}}>
          Se você está cadastrado na versão antiga do Tem Açúcar, precisa criar uma nova senha.
        </TextBox>
        <Button onPress={Actions.requestPassword}>
          Criar uma nova senha
        </Button>
        <OrSeparator />
        <Button onPress={Actions.signIn} style={{paddingHorizontal: 34}}>
          Tentar uma vez mais
        </Button>
      </SimpleScreen>
    )
  }
}
