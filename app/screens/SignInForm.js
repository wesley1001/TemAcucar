import React, { Component } from 'react-native'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import Form from "../components/Form"
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

export default SignInForm = ({ onSignIn }) => (
  <Form name="signInForm" validators={validators}>
    <EmailInput />
    <PasswordInput />
    <FormSubmit
      title="Fazer login"
      onSubmit={onSignIn}
    />
    <FormFooter>
      <Link onPress={Actions.requestPassword} style={{marginBottom: 10}}>
        Esqueceu sua senha?
      </Link>
      <SignUpLink />
    </FormFooter>
  </Form>
)
