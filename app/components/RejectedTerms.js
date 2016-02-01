import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class RejectedTerms extends Component {
  render() {
    const { onCancelRejectTerms } = this.props
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Vamos sentir sua falta :)
        </Text>
        <Text style={[StyleSheets.paragraph]}>
          Escreva para contato@temacucar.com caso queira compartilhar o motivo de ter recusado os termos. Vai ser um prazer falar com você!
        </Text>
        <Text style={[StyleSheets.paragraph]}>
          Caso você tenha recusado sem querer, clique no botão abaixo para ler novamente.
        </Text>
        <Button onPress={onCancelRejectTerms} viewStyle={StyleSheets.marginBottom}>
          Ler novamente os termos
        </Button>
      </View>
    )
  }
}
