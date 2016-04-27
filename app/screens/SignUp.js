import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"
import SignInLink from "../components/SignInLink"

export default SignUp = ({ onFacebook }) => (
  <SimpleScreen navBar={true} navBarTitle="Quer se cadastrar?">
    <Button onPress={onFacebook} style={{ backgroundColor: Colors.facebook, borderColor: Colors.darkFacebook }}>
      Cadastre-se com o Facebook
    </Button>
    <OrSeparator />
    <Button onPress={Actions.signUpForm} style={{marginBottom: 20}}>
      Crie sua conta com seu email
    </Button>
    <SignInLink />
  </SimpleScreen>
)
