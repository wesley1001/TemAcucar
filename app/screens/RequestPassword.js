import React, {
  Component,
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import Form from "../components/Form"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class RequestPassword extends Component {
  componentWillReceiveProps(nextProps) {
    const { resetPassword, requestPasswordError } = nextProps.auth
    const { submit } = this.refs
    if (resetPassword && (resetPassword != this.props.auth.resetPassword)) {
      Actions.resetPassword()
    } else if (requestPasswordError) {
      submit.postSubmit(UserValidators.errorMessage(requestPasswordError))
    }
  }

  render() {
    const { onRequestPassword } = this.props
    return (
      <Form name="requestPassword" validators={validators}>
        <EmailInput />
        <FormSubmit
          ref="submit"
          title="Enviar instruções para nova senha"
          onSubmit={onRequestPassword}
        />
      </Form>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(RequestPassword)
