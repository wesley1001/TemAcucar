import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'

import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"
import Button from "../components/Button"

export default class ExpiredVersion extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ExpiredVersion')
  }

  render() {
    const { onUpdate } = this.props
    return(
      <SimpleScreen headline="Sua versão está expirada ;)">
        <TextBox style={{marginBottom: 36}}>
          Vai ser preciso atualizar sua versão para continuar utilizando o app do Tem Açúcar.
        </TextBox>
        <Button onPress={onUpdate}>
          Atualizar versão
        </Button>
      </SimpleScreen>
    )
  }
}
