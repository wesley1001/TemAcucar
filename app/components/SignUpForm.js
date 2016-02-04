import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
} from 'react-native'
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import { Actions } from 'react-native-router-flux'

import moment from 'moment'
var {GiftedForm, GiftedFormManager} = require('react-native-gifted-form')

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import SimplePage from "./SimplePage"
import Label from "./Label"
import Button from "./Button"
import Link from "./Link"
import FormTextInput from "./FormTextInput"

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
  errorMessage(error) {
    switch (error.id) {
      case 'email_is_already_taken':
        return 'Email já cadastrado'
      default:
        return 'Oops!'
    }
  }

  render() {
    const { auth: {signingUp, signUpError}, onSignUp } = this.props
    const emailError = signUpError && this.errorMessage(signUpError)
    const notPresentMessage = '{TITLE} deve ser preenchido.'
    return (
      <SimplePage viewStyle={{
        alignItems: 'stretch',
        flex: 1,
        paddingTop: 120,
        backgroundColor: Colors.white,
      }}>
        <View style={{
          flex: 1,
          borderColor: '#666',
          borderTopWidth: 0.5,
        }}>
          <GiftedForm
            scrollEnabled={false}
            formStyles={{
              containerView: {
                backgroundColor: Colors.ice,
              }
            }}
            formName='signupForm'
            validators={{
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
            }}
          >

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

            <GiftedForm.SubmitWidget
              title={ (signingUp ? 'Enviando cadastro...' : 'Fazer cadastro') }
              widgetStyles={{
                submitButton: {
                  backgroundColor: Colors.pink,
                },
                errorContainer: {
                  marginTop: 10,
                },
                errorText: {
                  color: Colors.pink,
                  textAlign: 'center',
                  fontSize: 16,
                },
              }}
              onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
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
              }}
        
            />
            <View style={{
              alignSelf: 'stretch',
              alignItems: 'center',
            }}>
              <Link onPress={Actions.signIn}>
                Já possui cadastro?
              </Link>
            </View>
          </GiftedForm>
        </View>
      </SimplePage>
    )
  }

  // render() {
  //   const { auth: {signingUp, signUpError}, fields: { first_name, last_name, email, password }, dirty, valid, submitting, handleSubmit, onSignUp } = this.props
  //   const emailError = signUpError && this.errorMessage(signUpError)
  //   return (
  //     <SimplePage>
  //       <View style={StyleSheets.stretch}>
  //         <Label field={first_name}>Nome</Label>
  //         <TextInput
  //           style={StyleSheets.input}
  //           keyboardType={'default'}
  //           autoCapitalize={'words'}
  //           placeholder={'Digite seu primeiro nome'}
  //           {...first_name}
  //         />
  //         <Label field={last_name}>Sobrenome</Label>
  //         <TextInput
  //           style={StyleSheets.input}
  //           keyboardType={'default'}
  //           autoCapitalize={'words'}
  //           placeholder={'Digite seu sobrenome'}
  //           {...last_name}
  //         />
  //         <Label field={email} error={emailError}>Email</Label>
  //         <TextInput
  //           style={StyleSheets.input}
  //           autoCapitalize={'none'}
  //           keyboardType={'email-address'}
  //           placeholder={'Digite seu e-mail'}
  //           {...email}
  //         />
  //         <Label field={password}>Senha</Label>
  //         <TextInput
  //           style={StyleSheets.input}
  //           autoCapitalize={'none'}
  //           keyboardType={'default'}
  //           secureTextEntry={true}
  //           placeholder={'Digite sua senha'}
  //           {...password}
  //         />
  //       </View>
  //       <Button disabled={!dirty || !valid || submitting || signingUp} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignUp)}>
  //         { (signingUp ? 'Enviando cadastro...' : 'Fazer cadastro') }
  //       </Button>
  //       <Link onPress={Actions.signIn}>
  //         Já possui cadastro?
  //       </Link>
  //     </SimplePage>
  //   )
  // }
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['first_name', 'last_name', 'email', 'password'],
  validate,
})(SignUpForm)

export default connect(state => ({
  auth: state.auth,
}))(SignUpForm)
