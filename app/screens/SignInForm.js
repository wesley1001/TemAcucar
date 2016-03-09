import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormFooter from "../components/FormFooter"
import Link from "../components/Link"
import SignUpLink from "../components/SignUpLink"

const validators = {
  email: UserValidators.email,
  password: UserValidators.password,
}

class SignInForm extends Component {
  render() {
    const { onSignIn, fields: { email, password } } = this.props
    return (
      <FormScreen>
        <EmailInput {...email} />
        <PasswordInput {...password} />
        <FormSubmit {...this.props} onSubmit={onSignIn}>
          Fazer login
        </FormSubmit>
        <FormFooter>
          <Link onPress={Actions.requestPassword} style={{marginBottom: 10}}>
            Esqueceu sua senha?
          </Link>
          <SignUpLink />
        </FormFooter>
      </FormScreen>
    )
  }
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password'],
  validate: validateFunction(validators),
})(SignInForm)

export default SignInForm
