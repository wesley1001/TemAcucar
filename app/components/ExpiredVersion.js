import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'
import Libraries, { LinkingIOS } from 'react-native'

import Config from "../Config"
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"

export default class ExpiredVersion extends Component {
  handleUpdate() {
    LinkingIOS.openURL(Config.appStoreUrl)
  }

  render() {
    return (
      <SimpleScreen headline="Sua versão está expirada ;)">
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Vai ser preciso atualizar sua versão para continuar utilizando o app do Tem Açúcar.
        </Text>
        <Button onPress={this.handleUpdate.bind(this)}>
          Atualizar versão
        </Button>
      </SimpleScreen>
    )
  }
}
