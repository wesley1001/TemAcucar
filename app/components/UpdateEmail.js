import React, {
  Component,
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Label from "./Label"
import Button from "./Button"

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Preencha um email válido'
  }
  return errors
}

class UpdateEmail extends Component {
  errorMessage(error) {
    switch (error.id) {
      case 'email_is_already_taken':
        return 'Email já cadastrado para outro usuário.'
      default:
        return 'Oops! Ocorreu um erro ao atualizar seu email.'
    }
  }

  render() {
    const { config: {updatingEmail, updateEmailError}, fields: { email }, dirty, valid, submitting, handleSubmit, onUpdate } = this.props
    return (
      <SimpleScreen>
        <View style={{ alignSelf: 'stretch' }}>
          <Label field={email}>Email do dia-a-dia</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail do dia-a-dia'}
            {...email}
          />
        </View>
        <Button disabled={!dirty || !valid || submitting || updatingEmail} style={[StyleSheets.stretch, StyleSheets.marginBottom]} onPress={handleSubmit(onUpdate)}>
          { (updatingEmail ? 'Atualizando seu email...' : 'Atualizar meu email') }
        </Button>
        <Text style={[StyleSheets.error, {height: 50}]}>{updateEmailError && this.errorMessage(updateEmailError)}</Text>
      </SimpleScreen>
    )
  }
}

UpdateEmail = reduxForm({
  form: 'updateEmail',
  fields: ['email'],
  validate,
})(UpdateEmail)

export default connect(state => ({
  config: state.config,
}))(UpdateEmail)
