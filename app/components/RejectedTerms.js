import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import SimplePage from "./SimplePage"
import Button from "./Button"

export default class RejectedTerms extends Component {
  render() {
    const { onCancelRejectTerms } = this.props
    return (
      <SimplePage headline="Vamos sentir sua falta :)">
        <Text style={[StyleSheets.paragraph]}>
          Escreva para contato@temacucar.com caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
        </Text>
        <Text style={[StyleSheets.paragraph]}>
          Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
        </Text>
        <Button onPress={onCancelRejectTerms} viewStyle={StyleSheets.marginBottom}>
          Ler novamente os termos
        </Button>
      </SimplePage>
    )
  }
}
