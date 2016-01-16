import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "./StyleSheets"

export default class Login extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.headline}>Faça seu login</Text>
        <View style={StyleSheets.stretch}>
          <Text style={StyleSheets.text}>Email</Text>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
          />
          <Text style={StyleSheets.text}>Senha</Text>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder={'Digite seu e-mail'}
          />
        </View>
        <TouchableHighlight style={StyleSheets.flexEnd}>
          <Text style={StyleSheets.button}>Fazer login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
