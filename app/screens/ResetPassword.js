import React, { Component } from 'react-native'

import UserValidators from '../validators/UserValidators'
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  reset_password_token: UserValidators.reset_password_token,
  password: UserValidators.password,
}

export default class ResetPassword extends Component {
  componentWillReceiveProps(nextProps) {
    const { resetPasswordError } = nextProps.auth
    const { submit } = this.refs
    if (resetPasswordError) {
      submit.postSubmit(UserValidators.errorMessage(resetPasswordError))
    }
  }

  render() {
    const { onResetPassword } = this.props
    return (
      <Form name="resetPassword" validators={validators}>
        <FormTextInput 
          name='reset_password_token'
          title='Código'
          placeholder='Digite o código recebido por email'
          icon='unlock'
        />
        <PasswordInput
          title='Nova senha'
          placeholder='Digite sua nova senha'
        />
        <FormSubmit
          ref="submit"
          title="Criar nova senha"
          onSubmit={onResetPassword}
        />
      </Form>
    )
  }
}
