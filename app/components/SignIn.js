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
import ResetPassword from "./ResetPassword"
import CreateAccount from "./CreateAccount"

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 8) {
    errors.password = 'Senha muito curta'
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Preencha um email válido'
  }
  return errors
}

class SignIn extends Component {
  handleResetPassword() {
    this.props.navigator.push({
      title: 'Esqueceu sua senha?',
      component: ResetPassword,
    })
  }

  handleCreateAccount() {
    this.props.navigator.push({
      title: 'Crie sua conta',
      component: CreateAccount,
      passProps: { onSignInSubmit: this.props.onSignInSubmit },
    })
  }

  render() {
    const { fields: { email, password }, dirty, valid, submitting, handleSubmit, onSignInSubmit } = this.props
    console.log(this.props)
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
        <Button disabled={!dirty || !valid || submitting} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignInSubmit)}>
          Fazer login
        </Button>
        <Link onPress={this.handleResetPassword.bind(this)}>
          Esqueceu sua senha?
        </Link>
        <Link onPress={this.handleCreateAccount.bind(this)}>
          Crie sua conta
        </Link>
      </View>
    )
  }
}

SignIn = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate,
})(SignIn)

export default SignIn
