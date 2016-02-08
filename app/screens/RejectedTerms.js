import React, { View } from 'react-native'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import Link from "../components/Link"
import Paragraph from "../components/Paragraph"

export default RejectedTerms = ({ onCancelRejectTerms, onContact }) => (
  <SimpleScreen headline="Vamos sentir sua falta :)">
    <View style={{paddingHorizontal: 20, marginBottom: 20}}>
      <Paragraph>
        Escreva para {<Link onPress={onContact}>contato@temacucar.com</Link>} caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
      </Paragraph>
      <Paragraph>
        Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
      </Paragraph>
    </View>
    <Button onPress={onCancelRejectTerms}>
      Ler novamente os termos
    </Button>
  </SimpleScreen>
)
