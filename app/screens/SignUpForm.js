import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FormTextInput from "../components/FormTextInput"
import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormError from "../components/FormError"
import FormFooter from "../components/FormFooter"
import SignInLink from "../components/SignInLink"

const validators = {
  first_name: UserValidators.first_name,
  last_name: UserValidators.last_name,
  email: UserValidators.email,
  password: UserValidators.password,
}

class SignUpForm extends Component {
  render() {
    const { onSignUp, fields, auth: { signingUp, signUpError } } = this.props
    const { first_name, last_name, email, password } = fields
    return (
      <FormScreen navBar={true} navBarTitle="Crie sua conta com seu email">
        <FormTextInput 
          name='first_name'
          title='Nome'
          placeholder='Digite seu primeiro nome'
          icon='account-circle'
          autoCapitalize='words'
          {...first_name}
        />
        <FormTextInput 
          name='last_name'
          title='Sobrenome'
          placeholder='Digite seu sobrenome'
          icon='account-circle'
          autoCapitalize='words'
          {...last_name}
        />
        <EmailInput {...email} />
        <PasswordInput {...password} />
        { signUpError && <FormError message={UserValidators.errorMessage(signUpError)} /> }
        <FormSubmit
          {...this.props}
          isLoading={signingUp}
          onSubmit={onSignUp}
        >
          Fazer cadastro
        </FormSubmit>
        <FormFooter>
          <SignInLink />
        </FormFooter>
      </FormScreen>
    )
  }
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['first_name', 'last_name', 'email', 'password'],
  validate: validateFunction(validators),
})(SignUpForm)

export default SignUpForm
