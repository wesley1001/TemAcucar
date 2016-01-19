import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "./StyleSheets"
import Login from "./Login"
import CreateAccount from "./CreateAccount"

export default class Welcome extends Component {
  handleLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
    })
  }

  handleCreateAccount() {
    this.props.navigator.push({
      title: 'Crie sua conta',
      component: CreateAccount,
    })
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('./img/logo.jpg')} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
        <TouchableHighlight onPress={this.handleCreateAccount.bind(this)}>
          <Text style={StyleSheets.button}>Crie sua conta</Text>
        </TouchableHighlight>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <TouchableHighlight onPress={this.handleLogin.bind(this)}>
          <Text style={StyleSheets.button}>Faça seu login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
