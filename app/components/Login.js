import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import {reduxForm} from 'redux-form'

import StyleSheets from "../styles/StyleSheets"
import Label from "./Label"
import Button from "./Button"
import Link from "./Link"
import ForgotPassword from "./ForgotPassword"

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Preencha sua senha'
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Preencha um email válido'
  }
  return errors
}

class Login extends Component {
  handleForgotPassword() {
    this.props.navigator.push({
      title: 'Esqueceu sua senha?',
      component: ForgotPassword,
    })
  }

  render() {
    const { fields: { email, password }, dirty, valid, submitting, handleSubmit, onLoginSubmit } = this.props
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Faça seu login</Text>
        <View style={StyleSheets.stretch}>
          <Label field={email}>Email</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
            {...email}
          />
          <Label field={password}>Senha</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder={'Digite sua senha'}
            {...password}
          />
        </View>
        <Button disabled={!dirty || !valid || submitting} style={StyleSheets.flexEnd} onPress={handleSubmit(onLoginSubmit)}>
          Fazer login
        </Button>
        <Link style={StyleSheets.marginTop} onPress={this.handleForgotPassword.bind(this)}>
          Esqueceu sua senha?
        </Link>
      </View>
    )
  }
}

Login = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate,
})(Login)

export default Login
