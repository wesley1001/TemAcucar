import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"
import Login from "./Login"
import CreateAccount from "./CreateAccount"

export default class Welcome extends Component {
  handleLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
      passProps: { onLoginSubmit: this.props.onLoginSubmit },
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
        <Image source={require('../img/logo.jpg')} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
        <Button onPress={this.handleCreateAccount.bind(this)}>
          Crie sua conta
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={this.handleLogin.bind(this)}>
          Faça seu login
        </Button>
      </View>
    )
  }
}
