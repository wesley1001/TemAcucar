import React, { View } from 'react-native'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import Link from "../components/Link"
import Sentence from "../components/Sentence"

export default RejectedTerms = ({ onCancelRejectTerms, onContact }) => (
  <SimpleScreen headline="Vamos sentir sua falta :)">
    <View style={{paddingHorizontal: 20, marginBottom: 20}}>
      <Sentence style={{marginBottom: 20}}>
        Escreva para <Link onPress={onContact} style={{fontSize: 14, lineHeight: 16}}>contato@temacucar.com</Link> caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
      </Sentence>
      <Sentence>
        Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
      </Sentence>
    </View>
    <Button onPress={onCancelRejectTerms}>
      Ler novamente os termos
    </Button>
  </SimpleScreen>
)
