import React from 'react-native'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"

export default RejectedTerms = ({ onCancelRejectTerms }) => (
  <SimpleScreen headline="Vamos sentir sua falta :)">
    <Paragraph>
      Escreva para contato@temacucar.com caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
    </Paragraph>
    <Paragraph>
      Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
    </Paragraph>
    <Button onPress={onCancelRejectTerms}>
      Ler novamente os termos
    </Button>
  </SimpleScreen>
)
