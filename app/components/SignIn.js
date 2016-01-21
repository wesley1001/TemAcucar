import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"
import Link from "./Link"
import SignInForm from "./SignInForm"
import SignUp from "./SignUp"

export default class SignIn extends Component {
  handleSignIn() {
    this.props.navigator.push({
      title: 'Login',
      component: SignInForm,
      passProps: { onSignIn: this.props.onSignIn },
    })
  }

  handleSignUp() {
    this.props.navigator.push({
      title: 'Crie sua conta',
      component: SignUp,
      passProps: { onSignIn: this.props.onSignIn },
    })
  }

  render() {
    const { onFacebook } = this.props
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Button onPress={onFacebook} textStyle={StyleSheets.facebook}>
          Faça login com seu Facebook
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={this.handleSignIn.bind(this)} viewStyle={StyleSheets.marginBottom}>
          Entre com seu email e senha
        </Button>
        <Link onPress={this.handleSignUp.bind(this)}>
          Não possui cadastro?
        </Link>
      </View>
    )
  }
}
