import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

import StyleSheets from "./StyleSheets"
import ForgotPassword from "./ForgotPassword"
import Neighborhood from "./Neighborhood"

export default class Login extends Component {
  handleForgotPassword() {
    this.props.navigator.push({
      title: 'Esqueceu sua senha?',
      component: ForgotPassword,
    })
  }

  handleLogin() {
    this.props.navigator.push({
      title: 'Minha vizinhança',
      component: Neighborhood,
      passProps: {
        user: {
          latitude: -30.034162,
          longitude: -51.209485
        },
      },
    })
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Faça seu login</Text>
        <View style={StyleSheets.stretch}>
          <Text style={StyleSheets.label}>Email</Text>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
          />
          <Text style={StyleSheets.label}>Senha</Text>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder={'Digite sua senha'}
          />
        </View>
        <TouchableHighlight style={StyleSheets.flexEnd} onPress={this.handleLogin.bind(this)}>
          <Text style={StyleSheets.button}>Fazer login</Text>
        </TouchableHighlight>
        <TouchableOpacity style={StyleSheets.marginTop} onPress={this.handleForgotPassword.bind(this)}>
          <Text style={StyleSheets.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
