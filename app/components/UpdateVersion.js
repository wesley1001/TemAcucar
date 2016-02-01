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
  daysRemaining() {
    const { version } = this.props
    return Math.round(((new Date(version.expiry)).getTime() - Date.now()) / 1000 / 60 / 60 / 24)
  }

  render() {
    const { onIgnore } = this.props
    const daysRemaining = this.daysRemaining()
    const days = ( daysRemaining == 1 ? 'dia' : 'dias')
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Nova versão disponível
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${days}. ` }Que tal atualizar?
        </Text>
        <Button>
          Atualizar para a nova versão
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={onIgnore}>
          Continuar com a versão atual
        </Button>
      </View>
    )
  }
}
