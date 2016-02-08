import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import SignInLink from "../components/SignInLink"

export default SignUp = ({ onFacebook }) => (
  <SimpleScreen>
    <Button onPress={onFacebook} style={{ backgroundColor: Colors.facebook }}>
      Cadastre-se com o Facebook
    </Button>
    <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
    <Button onPress={Actions.signUpForm} style={StyleSheets.marginBottom}>
      Crie sua conta com seu email
    </Button>
    <SignInLink />
  </SimpleScreen>
)
