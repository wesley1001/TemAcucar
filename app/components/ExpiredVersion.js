import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class ExpiredVersion extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Sua versão está expirada ;)
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Vai ser preciso atualizar sua versão para continuar utilizando o app do Tem Açucar.
        </Text>
        <Button>
          Atualizar versão
        </Button>
      </View>
    )
  }
}
