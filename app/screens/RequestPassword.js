import React, {
  Component,
  Text,
  View,
  TextInput,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

export default class RequestPassword extends Component {
  componentWillReceiveProps(nextProps) {
    const { resetPassword, requestPasswordError } = nextProps.auth
    const { submit } = this.refs
    if (resetPassword && (resetPassword != this.props.auth.resetPassword)) {
      submit.postSubmit()
      Actions.resetPassword()
    } else if (requestPasswordError) {
      submit.postSubmit(UserValidators.errorMessage(requestPasswordError))
    }
  }

  render() {
    const { onRequestPassword } = this.props
    return (
      <FormScreen name="requestPassword" validators={validators}>
        <EmailInput />
        <FormSubmit
          ref="submit"
          title="Enviar instruções para nova senha"
          onSubmit={onRequestPassword}
        />
      </FormScreen>
    )
  }
}
