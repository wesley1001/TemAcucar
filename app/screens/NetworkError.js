import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'

import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"
import Button from "../components/Button"

export default class NetworkError extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('NetworkError')
  }

  render() {
    const { onTryAgain } = this.props
    return(
      <SimpleScreen headline="Oops! Ocorreu um erro ao acessar nosso servidor.">
        <TextBox style={{marginBottom: 20}}>
          Por favor, verifique sua conexão ou tente novamente em alguns minutos.
        </TextBox>
        <Button onPress={onTryAgain}>
          Tentar novamente
        </Button>
      </SimpleScreen>
    )
  }
}
