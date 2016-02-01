import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import Libraries, { LinkingIOS } from 'react-native'

import Config from "../Config"
import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class ExpiredVersion extends Component {
  render() {
    const { onTryAgain } = this.props
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Oops! Ocorreu um erro ao acessar nosso servidor.
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Por favor, verifique sua conexão ou tente novamente em alguns minutos.
        </Text>
        <Button onPress={onTryAgain}>
          Tentar novamente
        </Button>
      </View>
    )
  }
}
