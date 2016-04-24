import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class RequestPassword extends Component {
  componentWillReceiveProps(nextProps) {
    const { resetPassword } = nextProps.auth
    if (resetPassword && (resetPassword != this.props.auth.resetPassword)) {
      Actions.resetPassword()
    }
  }

  render() {
    const { onRequestPassword, fields: { email }, auth: { requestPasswordError, requestingPassword } } = this.props
    return (
      <FormScreen navBar={true} navBarTitle="Esqueceu sua senha?">
        <EmailInput {...email} />
        { requestPasswordError && <FormError message={UserValidators.errorMessage(requestPasswordError)} /> }
        <FormSubmit
          {...this.props}
          isLoading={requestingPassword}
          onSubmit={onRequestPassword}
        >
          Enviar instruções para nova senha
        </FormSubmit>
      </FormScreen>
    )
  }
}

RequestPassword = reduxForm({
  form: 'requestPassword',
  fields: ['email'],
  validate: validateFunction(validators),
})(RequestPassword)

export default RequestPassword
