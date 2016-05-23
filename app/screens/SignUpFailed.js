import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class SignUpFailed extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignUpFailed')
  }

  render() {
    return(
      <SimpleScreen navBar={true} navBarTitle="Já possui cadastro?" headline="Este e-mail já é cadastrado ;)">
        <TextBox style={{marginBottom: 20}}>
          Se você está cadastrado na versão antiga do Tem Açúcar, precisa criar uma nova senha.
        </TextBox>
        <Button onPress={Actions.requestPassword} style={{paddingHorizontal: 36}}>
          Criar nova senha
        </Button>
        <OrSeparator />
        <Button onPress={Actions.pop}>
          Tentar outro e-mail
        </Button>
      </SimpleScreen>
    )
  }
}
