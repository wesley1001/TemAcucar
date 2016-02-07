import React, {
  Component,
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import { Actions } from 'react-native-router-flux'

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

class RequestPassword extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth: {resetPassword} } = nextProps
    if (resetPassword && (resetPassword != this.props.auth.resetPassword)) {
      Actions.resetPassword()
    }
  }

  errorMessage(error) {
    switch (error.id) {
      case 'not_found':
        return 'Este email não é cadastrado.'
      default:
        return 'Oops! Ocorreu um erro ao solicitar instruções para nova senha.'
    }
  }

  render() {
    const { auth: {requestingPassword, requestPasswordError}, fields: { email }, dirty, valid, submitting, handleSubmit, onRequestPassword } = this.props
    return (
      <SimpleScreen>
        <View style={{ alignSelf: 'stretch' }}>
          <Label field={email}>Email</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
            {...email}
          />
        </View>
        <Button
          disabled={!dirty || !valid || submitting || requestingPassword}
          viewStyle={{ alignSelf: 'stretch', marginBottom: 20 }}
          onPress={handleSubmit(onRequestPassword)}
        >
          { (requestingPassword ? 'Solicitando instruções para nova senha...' : 'Enviar instruções para nova senha') }
        </Button>
        <Text style={[StyleSheets.error, {height: 50}]}>{requestPasswordError && this.errorMessage(requestPasswordError)}</Text>
      </SimpleScreen>
    )
  }
}

RequestPassword = reduxForm({
  form: 'requestPassword',
  fields: ['email'],
  validate,
})(RequestPassword)

export default connect(state => ({
  auth: state.auth,
}))(RequestPassword)
