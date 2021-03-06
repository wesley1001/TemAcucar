import React, { Component, View, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import Sentence from "../components/Sentence"

export default class RejectedTerms extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('RejectedTerms')
  }

  render() {
    const { onCancelRejectTerms, onContact } = this.props
    return(
      <SimpleScreen headline="Vamos sentir sua falta :)">
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Sentence style={{marginBottom: 20}}>
            Escreva para <Text onPress={onContact} style={{fontFamily: 'OpenSans-Bold'}}>contato@temacucar.com</Text> caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
          </Sentence>
          <Sentence>
            Caso você tenha recusado sem querer, clique no botão abaixo para ler uma vez mais.
          </Sentence>
        </View>
        <Button onPress={onCancelRejectTerms}>
          Ler novamente os termos
        </Button>
      </SimpleScreen>
    )
  }
}
