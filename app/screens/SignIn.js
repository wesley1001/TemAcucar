import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import SignUpLink from "../components/SignUpLink"

export default SignIn = ({ onFacebook }) => (
  <SimpleScreen>
    <Button onPress={onFacebook} style={{ backgroundColor: Colors.facebook }}>
      Faça login com seu Facebook
    </Button>
    <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
    <Button onPress={Actions.signInForm} style={StyleSheets.marginBottom}>
      Entre com seu email e senha
    </Button>
    <SignUpLink />
  </SimpleScreen>
)
