import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import UserValidators from '../validators/UserValidators'
import Form from "../components/Form"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class UpdateEmail extends Component {
  componentWillReceiveProps(nextProps) {
    const { updateEmailError } = nextProps.config
    const { submit } = this.refs
    if (updateEmailError) {
      submit.postSubmit(UserValidators.errorMessage(updateEmailError))
    }
  }

  render() {
    const { onUpdate } = this.props
    return (
      <Form name="updateEmail" validators={validators}>
        <EmailInput />
        <FormSubmit
          ref="submit"
          title="Atualizar meu email"
          onSubmit={onUpdate}
        />
      </Form>
    )
  }
}

export default connect(state => ({
  config: state.config,
}))(UpdateEmail)
