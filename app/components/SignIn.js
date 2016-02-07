import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"
import Link from "./Link"

export default class SignIn extends Component {
  render() {
    const { onFacebook } = this.props
    return (
      <SimpleScreen>
        <Button onPress={onFacebook} textStyle={StyleSheets.facebook}>
          Faça login com seu Facebook
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.signInForm} viewStyle={StyleSheets.marginBottom}>
          Entre com seu email e senha
        </Button>
        <Link onPress={Actions.signUp}>
          Não possui cadastro?
        </Link>
      </SimpleScreen>
    )
  }
}
