import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'

import StyleSheets from "../styles/StyleSheets"
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
  render() {
    const { auth: {requestingPassword, requestPasswordError}, fields: { email }, dirty, valid, submitting, handleSubmit, onRequestPassword, headline } = this.props
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>{headline || 'Esqueceu sua senha?'}</Text>
        <View style={StyleSheets.stretch}>
          <Label field={email}>Email</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
            {...email}
          />
        </View>
        <Button disabled={!dirty || !valid || submitting || requestingPassword} viewStyle={[StyleSheets.stretch, StyleSheets.marginBottom]} onPress={handleSubmit(onRequestPassword)}>
          { (requestingPassword ? 'Solicitando instruções para nova senha...' : 'Enviar instruções para nova senha') }
        </Button>
        <Text style={[StyleSheets.error, {height: 50}]}>{requestPasswordError}</Text>
      </View>
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
