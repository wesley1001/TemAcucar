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
  firstName: {
    title: 'Nome',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: notPresentMessage,
    }]
  },
  lastName: {
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
        return 'Oops! Ocorreu um erro.'
    }
  }

  handleSubmit(isValid, values, validationResults, postSubmit = null, modalNavigator = null) {
    if (isValid === true) {
      postSubmit(['Email já cadastrado para outro usuário.'])
      // prepare object
      // values.gender = values.gender[0];
      // values.birthday = moment(values.birthday).format('YYYY-MM-DD');

      /* Implement the request to your server using values variable
      ** then you can do:
      ** postSubmit(); // disable the loader
      ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
      ** postSubmit(['lastName already taken', 'Email already taken']); // disable the loader and display an error message
      ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
      */
    }
  }

  render() {
    const { auth: {signingUp, signUpError}, onSignUp } = this.props
    const emailError = signUpError && this.errorMessage(signUpError)
    return (
      <Form name="signUpForm" validators={validators}>
        <FormTextInput 
          name='firstName'
          title='Nome'
          placeholder='Digite seu primeiro nome'
          icon='user'
        />
        <FormTextInput 
          name='lastName'
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
          title={ (signingUp ? 'Enviando cadastro...' : 'Fazer cadastro') }
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

  // render() {
  //   const { auth: {signingUp, signUpError}, fields: { first_name, last_name, email, password }, dirty, valid, submitting, handleSubmit, onSignUp } = this.props
  //   const emailError = signUpError && this.errorMessage(signUpError)
  //   return (
  //       <Button disabled={!dirty || !valid || submitting || signingUp} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignUp)}>
  //         { (signingUp ? 'Enviando cadastro...' : 'Fazer cadastro') }
  //       </Button>
  //   )
  // }
}

export default connect(state => ({
  auth: state.auth,
}))(SignUpForm)
