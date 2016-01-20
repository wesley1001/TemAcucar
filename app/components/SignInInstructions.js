import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"
import SignIn from "./SignIn"
import ResetPassword from "./ResetPassword"

export default class SignInInstructions extends Component {
  handleSignIn() {
    this.props.navigator.push({
      title: 'Login',
      component: SignIn,
      passProps: { onSignIn: this.props.onSignIn },
    })
  }

  handleResetPassword() {
    this.props.navigator.push({
      title: 'Criar uma nova senha',
      component: ResetPassword,
      passProps: { headline: 'Criar uma nova senha' },
    })
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Não foi possível fazer seu login com sucesso
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Se você é usuário da versão antiga do Tem Açucar, vai ser preciso criar uma nova senha.
        </Text>
        <Button onPress={this.handleResetPassword.bind(this)}>
          Criar uma nova senha
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={this.handleSignIn.bind(this)}>
          Tentar uma vez mais
        </Button>
      </View>
    )
  }
}
