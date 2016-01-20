import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class ResetPassword extends Component {
  render() {
    const { headline } = this.props
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>{headline || 'Esqueceu sua senha?'}</Text>
        <View style={StyleSheets.stretch}>
          <Text style={StyleSheets.label}>Email</Text>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
          />
        </View>
        <TouchableHighlight style={StyleSheets.stretch}>
          <Text style={StyleSheets.button}>Enviar instruções para nova senha</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
