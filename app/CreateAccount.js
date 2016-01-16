import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

import Colors from "./Colors"
import StyleSheets from "./StyleSheets"
import Terms from "./Terms"
import Login from "./Login"

export default class CreateAccount extends Component {
  handleLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
    })
  }

  handleTerms() {
    this.props.navigator.push({
      title: 'Termos de uso',
      component: Terms,
    })
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Crie sua conta</Text>
        <View style={StyleSheets.stretch}>
          <Text style={StyleSheets.label}>Nome</Text>
          <TextInput
            style={StyleSheets.input}
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholder={'Digite seu primeiro nome'}
          />
          <Text style={StyleSheets.label}>Sobrenome</Text>
          <TextInput
            style={StyleSheets.input}
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholder={'Digite seu sobrenome'}
          />
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
            placeholder={'Digite sua senha'}
          />
        </View>
        <TouchableHighlight style={StyleSheets.flexEnd} onPress={this.handleTerms.bind(this)}>
          <Text style={StyleSheets.button}>Continuar</Text>
        </TouchableHighlight>
        <TouchableOpacity style={StyleSheets.marginTop} onPress={this.handleLogin.bind(this)}>
          <Text style={StyleSheets.link}>Já possui uma conta?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
