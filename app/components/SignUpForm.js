import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { GiftedForm } from 'react-native-gifted-form'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Label from "./Label"
import Button from "./Button"
import Link from "./Link"
import Form from "./Form"
import FormTextInput from "./FormTextInput"
import FormSubmit from "./FormSubmit"
import FormFooter from "./FormFooter"

const notPresentMessage = '{TITLE} deve ser preenchido.'
const validators = {
  first_name: {
    title: 'Nome',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: notPresentMessage,
    }]
  },
  last_name: {
    title: 'Sobrenome',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: notPresentMessage,
    }]
  },
  email: {
    title: 'Email',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: notPresentMessage,
    },
    {
      validator: 'isEmail',
      message: '{TITLE} deve ser válido',
    }]
  },
  password: {
    title: 'Senha',
    validate: [{
      validator: 'isLength',
      arguments: [8, 255],
      message: 'Senha muito curta',
    }]
  },
}

class SignUpForm extends Component {
  errorMessage(error) {
    switch (error.id) {
      case 'email_is_already_taken':
        return 'Email já cadastrado para outro usuário.'
      default:
        return 'Oops! Ocorreu um erro ao fazer seu cadastro.'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { signUpError } = nextProps.auth
    if(signUpError) {
      const error = signUpError && this.errorMessage(signUpError)
      this.refs.submit.postSubmit(error)
    }
  }

  handleSubmit(isValid, values) {
    if (isValid === true) {
      this.props.onSignUp(values)
    }
  }

  render() {
    const { auth: {signingUp, signUpError}, onSignUp } = this.props
    const error = signUpError && this.errorMessage(signUpError)
    return (
      <Form name="signUpForm" validators={validators}>
        <FormTextInput 
          name='first_name'
          title='Nome'
          placeholder='Digite seu primeiro nome'
          icon='user'
        />
        <FormTextInput 
          name='last_name'
          title='Sobrenome'
          placeholder='Digite seu sobrenome'
          icon='pagelines'
        />
        <FormTextInput 
          name='email'
          title='Email'
          placeholder='digite@seu.email'
          icon='at'
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <FormTextInput 
          name='password'
          title='Senha'
          placeholder='Digite sua senha'
          icon='key'
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <FormSubmit
          ref="submit"
          title="Fazer cadastro"
          isDisabled={false}
          onSubmit={this.handleSubmit.bind(this)}
        />
        <FormFooter>
          <Link onPress={Actions.signIn}>
            Já possui cadastro?
          </Link>
        </FormFooter>
      </Form>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(SignUpForm)
