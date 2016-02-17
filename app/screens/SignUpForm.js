import React, { Component } from 'react-native'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FormTextInput from "../components/FormTextInput"
import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormFooter from "../components/FormFooter"
import SignInLink from "../components/SignInLink"

const validators = {
  first_name: UserValidators.first_name,
  last_name: UserValidators.last_name,
  email: UserValidators.email,
  password: UserValidators.password,
}

export default class SignUpForm extends Component {
  componentWillReceiveProps(nextProps) {
    const { signUpError } = nextProps.auth
    const { submit } = this.refs
    if(signUpError) {
      submit.postSubmit(UserValidators.errorMessage(signUpError))
    }
  }

  render() {
    const { onSignUp } = this.props
    return (
      <FormScreen name="signUpForm" validators={validators}>
        <FormTextInput 
          name='first_name'
          title='Nome'
          placeholder='Digite seu primeiro nome'
          icon='account-circle'
        />
        <FormTextInput 
          name='last_name'
          title='Sobrenome'
          placeholder='Digite seu sobrenome'
          icon='account-circle'
        />
        <EmailInput />
        <PasswordInput />
        <FormSubmit
          ref="submit"
          title="Fazer cadastro"
          onSubmit={onSignUp}
        />
        <FormFooter>
          <SignInLink />
        </FormFooter>
      </FormScreen>
    )
  }
}
