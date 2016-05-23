import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class UpdateVersion extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('UpdateVersion')
  }

  render() {
    const { onIgnore, onUpdate, daysRemaining } = this.props
    return(
      <SimpleScreen headline="Nova versão disponível">
        <TextBox style={{marginBottom: 20}}>
          Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${( daysRemaining == 1 ? 'dia' : 'dias')}. ` }Que tal atualizar?
        </TextBox>
        <Button onPress={onUpdate}>
          Atualizar para a nova versão
        </Button>
        <OrSeparator />
        <Button onPress={onIgnore}>
          Continuar com a versão atual
        </Button>
      </SimpleScreen>
    )    
  }
}
