import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"
import Link from "./Link"

export default class SignUp extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth: {facebookError} } = nextProps
    if (facebookError && (facebookError != this.props.auth.facebookError)) {
      Actions.signInFailed()
    }
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
        <Button onPress={Actions.signUpForm} viewStyle={StyleSheets.marginBottom}>
          Crie sua conta com seu email
        </Button>
        <Link onPress={Actions.signIn}>
          Já possui cadastro?
        </Link>
      </View>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(SignUp)
