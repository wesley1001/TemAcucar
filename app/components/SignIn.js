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

class SignIn extends Component {
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
          Faça login com seu Facebook
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.signInForm} viewStyle={StyleSheets.marginBottom}>
          Entre com seu email e senha
        </Button>
        <Link onPress={Actions.signUp}>
          Não possui cadastro?
        </Link>
      </View>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(SignIn)
