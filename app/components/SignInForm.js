import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import Label from "./Label"
import Button from "./Button"
import Link from "./Link"

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

class SignInForm extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth: {signInError} } = nextProps
    if (signInError && (signInError != this.props.auth.signInError)) {
      Actions.signInFailed()
    }
  }

  render() {
    const { auth: { signingIn }, fields: { email, password }, dirty, valid, submitting, handleSubmit, onSignIn } = this.props
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
        <Button disabled={!dirty || !valid || submitting || signingIn} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignIn)}>
          { signingIn ? 'Fazendo login...' : 'Fazer login' }
        </Button>
        <Link onPress={Actions.requestPassword}>
          Esqueceu sua senha?
        </Link>
        <Link onPress={Actions.signUp}>
          Não possui cadastro?
        </Link>
      </View>
    )
  }
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password'],
  validate,
})(SignInForm)

export default connect(state => ({
  auth: state.auth,
}))(SignInForm)
