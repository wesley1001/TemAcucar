import React, { Component } from 'react-native'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

export default class UpdateEmail extends Component {
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
      <FormScreen name="updateEmail" validators={validators}>
        <EmailInput />
        <FormSubmit
          ref="submit"
          title="Atualizar meu email"
          onSubmit={onUpdate}
        />
      </FormScreen>
    )
  }
}
