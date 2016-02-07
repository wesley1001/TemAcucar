import React from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"
import Paragraph from "./Paragraph"

export default RejectedTerms = ({ onCancelRejectTerms }) => (
  <SimpleScreen headline="Vamos sentir sua falta :)">
    <Paragraph>
      Escreva para contato@temacucar.com caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
    </Paragraph>
    <Paragraph>
      Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
    </Paragraph>
    <Button onPress={onCancelRejectTerms} viewStyle={StyleSheets.marginBottom}>
      Ler novamente os termos
    </Button>
  </SimpleScreen>
)
