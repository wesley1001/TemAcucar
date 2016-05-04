import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"
import SignInLink from "../components/SignInLink"

export default class SignUp extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignUp')
  }

  render() {
    const { onFacebook } = this.props
    return(
      <SimpleScreen navBar={true} navBarTitle="Quer se cadastrar?">
        <Button onPress={onFacebook} style={{ backgroundColor: Colors.facebook, borderColor: Colors.darkFacebook, paddingHorizontal: 22 }}>
          Cadastre-se com o Facebook
        </Button>
        <OrSeparator />
        <Button onPress={Actions.signUpForm} style={{marginBottom: 20, paddingHorizontal: 20}}>
          Crie sua conta com seu e-mail
        </Button>
        <SignInLink />
      </SimpleScreen>
    )
  }
}
