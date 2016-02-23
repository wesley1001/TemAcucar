import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class UpdateEmail extends Component {
  render() {
    const { onUpdate, fields: { email }, config: { updateEmailError, updatingEmail } } = this.props
    return (
      <FormScreen name="updateEmail" validators={validators}>
        <EmailInput {...email} />
        { updateEmailError && <FormError message={UserValidators.errorMessage(updateEmailError)} /> }
        <FormSubmit
          {...this.props}
          isLoading={updatingEmail}
          onSubmit={onUpdate}
        >
          Atualizar meu email
        </FormSubmit>
      </FormScreen>
    )
  }
}

UpdateEmail = reduxForm({
  form: 'updateEmail',
  fields: ['email'],
  validate: validateFunction(validators),
})(UpdateEmail)

export default UpdateEmail
