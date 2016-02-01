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
  handleUpdate() {
    LinkingIOS.openURL(Config.appStoreUrl)
  }

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
        <Button onPress={this.handleUpdate.bind(this)}>
          Atualizar versão
        </Button>
      </View>
    )
  }
}
