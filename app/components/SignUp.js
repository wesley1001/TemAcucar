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
import SignUpForm from "./SignUpForm"
import SignIn from "./SignIn"

export default class SignUp extends Component {
  handleSignUp() {
    this.props.navigator.push({
      title: 'Cadastre-se',
      component: SignUpForm,
      passProps: this.props,
    })
  }

  handleSignIn() {
    this.props.navigator.push({
      title: 'Login',
      component: SignIn,
      passProps: this.props,
    })
  }

  render() {
    const { onFacebook } = this.props
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Button onPress={onFacebook} textStyle={StyleSheets.facebook}>
          Cadastre-se com o Facebook
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={this.handleSignUp.bind(this)} viewStyle={StyleSheets.marginBottom}>
          Crie sua conta com seu email
        </Button>
        <Link onPress={this.handleSignIn.bind(this)}>
          Já possui cadastro?
        </Link>
      </View>
    )
  }
}
