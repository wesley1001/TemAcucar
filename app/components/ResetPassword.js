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
import SimplePage from "./SimplePage"
import Label from "./Label"
import Button from "./Button"

const validate = values => {
  const errors = {}
  if (!values.resetPasswordToken) {
    errors.resetPasswordToken = 'Preencha o código enviado';
  }
  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 8) {
    errors.password = 'Senha muito curta'
  }
  return errors
}

class ResetPassword extends Component {
  errorMessage(error) {
    switch (error.id) {
      case 'unauthorized':
        return 'Código inválido. Confira novamente seu email ;)'
      default:
        return 'Oops! Ocorreu um erro ao cadastrar sua nova senha.'
    }
  }

  render() {
    const { auth: {resetingPassword, resetPasswordError}, fields: { resetPasswordToken, password }, dirty, valid, submitting, handleSubmit, onResetPassword, headline } = this.props
    return (
      <SimplePage headline="Confira seu email para criar sua nova senha">
        <View style={StyleSheets.stretch}>
          <Label field={resetPasswordToken}>Código enviado para seu email</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            placeholder={'Digite o código recebido por email'}
            {...resetPasswordToken}
          />
          <Label field={password}>Nova senha</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder={'Digite sua nova senha'}
            {...password}
          />
        </View>
        <Button disabled={!dirty || !valid || submitting || resetingPassword} viewStyle={[StyleSheets.stretch, StyleSheets.marginBottom]} onPress={handleSubmit(onResetPassword)}>
          { (resetingPassword ? 'Enviando nova senha...' : 'Criar nova senha') }
        </Button>
        <Text style={[StyleSheets.error, {height: 50}]}>{resetPasswordError && this.errorMessage(resetPasswordError)}</Text>
      </SimplePage>
    )
  }
}

ResetPassword = reduxForm({
  form: 'resetPassword',
  fields: ['resetPasswordToken', 'password'],
  validate,
})(ResetPassword)

export default connect(state => ({
  auth: state.auth,
}))(ResetPassword)
