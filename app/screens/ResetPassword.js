import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FormTextInput from "../components/FormTextInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormError from "../components/FormError"

const validators = {
  reset_password_token: UserValidators.reset_password_token,
  password: UserValidators.password,
}

class ResetPassword extends Component {
  render() {
    const { onResetPassword, fields, auth: { resetPasswordError, resetingPassword } } = this.props
    const { reset_password_token, password } = fields
    return (
      <FormScreen>
        <FormTextInput 
          name='reset_password_token'
          title='Código'
          placeholder='Digite o código recebido'
          icon='keyboard'
          autoCorrect={false}
          autoCapitalize='none'
          {...reset_password_token}
        />
        <PasswordInput
          title='Nova senha'
          placeholder='Digite sua nova senha'
          {...password}
        />
        { resetPasswordError && <FormError message={UserValidators.errorMessage(resetPasswordError)} /> }
        <FormSubmit
          {...this.props}
          isLoading={resetingPassword}
          onSubmit={onResetPassword}
        >
          Criar nova senha
        </FormSubmit>
      </FormScreen>
    )
  }
}

ResetPassword = reduxForm({
  form: 'resetPassword',
  fields: ['reset_password_token', 'password'],
  validate: validateFunction(validators),
})(ResetPassword)

export default ResetPassword
