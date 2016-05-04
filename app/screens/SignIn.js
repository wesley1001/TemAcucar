import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"
import SignUpLink from "../components/SignUpLink"

export default SignIn = ({ onFacebook }) => (
  <SimpleScreen navBar={true} navBarTitle="Já possui cadastro?">
    <Button onPress={onFacebook} style={{ backgroundColor: Colors.facebook, borderColor: Colors.darkFacebook, paddingHorizontal: 20 }}>
      Faça login com seu Facebook
    </Button>
    <OrSeparator />
    <Button onPress={Actions.signInForm} style={{marginBottom: 20, paddingHorizontal: 20}}>
      Entre com seu e-mail e senha
    </Button>
    <SignUpLink />
  </SimpleScreen>
)
