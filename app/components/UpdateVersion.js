import React, {
  Component,
  Text,
} from 'react-native'
import Libraries, { LinkingIOS } from 'react-native'

import Config from "../Config"
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"

export default class ExpiredVersion extends Component {
  daysRemaining() {
    const { version } = this.props
    return Math.round(((new Date(version.expiry)).getTime() - Date.now()) / 1000 / 60 / 60 / 24)
  }

  handleUpdate() {
    LinkingIOS.openURL(Config.appStoreUrl)
  }

  render() {
    const { onIgnore } = this.props
    const daysRemaining = this.daysRemaining()
    const days = ( daysRemaining == 1 ? 'dia' : 'dias')
    return (
      <SimpleScreen headline="Nova versão disponível">
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${days}. ` }Que tal atualizar?
        </Text>
        <Button onPress={this.handleUpdate.bind(this)}>
          Atualizar para a nova versão
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={onIgnore}>
          Continuar com a versão atual
        </Button>
      </SimpleScreen>
    )
  }
}
