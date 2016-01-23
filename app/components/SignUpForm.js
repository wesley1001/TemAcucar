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
import Link from "./Link"
import SignIn from "./SignIn"

const validate = values => {
  const errors = {}
  if (!values.first_name) {
    errors.first_name = 'Preencha seu nome'
  }
  if (!values.last_name) {
    errors.last_name = 'Preencha seu sobrenome'
  }
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

class SignUpForm extends Component {
  handleSignIn() {
    this.props.navigator.push({
      title: 'Crie sua conta',
      component: SignIn,
      passProps: {
        onSignIn: this.props.onSignIn,
        onSignUp: this.props.onSignUp,
        onSignOut: this.props.onSignOut,
        onRequestPassword: this.props.onRequestPassword,
      },
    })
  }

  render() {
    const { auth: {signingUp, signUpError}, fields: { first_name, last_name, email, password }, dirty, valid, submitting, handleSubmit, onSignUp } = this.props
    const errors = signUpError && signUpError.errors
    const emailError = errors && errors.email && `Email ${errors.email[0]}`
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Cadastre-se</Text>
        <View style={StyleSheets.stretch}>
          <Label field={first_name}>Nome</Label>
          <TextInput
            style={StyleSheets.input}
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholder={'Digite seu primeiro nome'}
            {...first_name}
          />
          <Label field={last_name}>Sobrenome</Label>
          <TextInput
            style={StyleSheets.input}
            keyboardType={'default'}
            autoCapitalize={'words'}
            placeholder={'Digite seu sobrenome'}
            {...last_name}
          />
          <Label field={email} error={emailError}>Email</Label>
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
        <Button disabled={!dirty || !valid || submitting || signingUp} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignUp)}>
          { (signingUp ? 'Enviando cadastro...' : 'Fazer cadastro') }
        </Button>
        <Link onPress={this.handleSignIn.bind(this)}>
          Já possui cadastro?
        </Link>
      </View>
    )
  }
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['first_name', 'last_name', 'email', 'password'],
  validate,
})(SignUpForm)

export default connect(state => ({
  auth: state.auth,
}))(SignUpForm)
