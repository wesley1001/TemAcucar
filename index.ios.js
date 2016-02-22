// import { AppRegistry } from 'react-native'
// import Root from './app/containers/Root'
// AppRegistry.registerComponent('TemAcucar', () => Root)

import React, { Component } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StatelessForm, InlineTextInput } from 'react-native-stateless-form'
import { validateAll } from 'validate-model'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reduxForm, reducer as formReducer } from 'redux-form'
import createLogger from 'redux-logger'

const UserValidators = {
  name: {
    title: 'Name',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  email: {
    title: 'Email',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    },
    {
      validator: 'isEmail',
      message: '{TITLE} must be valid',
    }]
  },
  password: {
    title: 'Password',
    validate: [{
      validator: 'isLength',
      arguments: [8, 255],
      message: '{TITLE} is too short',
    }]
  },
}

const validate = values => {
  const validation = validateAll(UserValidators, values)
  if (!validation.valid) return validation.messages
  return {}
}

class FormInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  render() {
    const { iconName, name, value, error } = this.props
    const message = ( error && error.length > 0 ? error[0] : null)
    return (
      <InlineTextInput
        ref='input'
        style={{ borderColor: 'gray' }}
        titleStyle={{ color: 'dimgray' }}
        inputStyle={{ color: 'slategray' }}
        messageStyle={{ color: 'red' }}
        icon={ <Icon name={iconName} size={18} color={'steelblue'} /> }
        validIcon={ <Icon name='check' size={18} color='green' /> }
        invalidIcon={ <Icon name='clear' size={18} color='red' /> }
        message={message}
        { ...this.props }
      />
    )
  }
}

class Form extends Component {
  render() {
    const { fields: { name, email, password } } = this.props
    return (
      <StatelessForm
        focusableTypes={['InlineTextInput', 'FormInput']}
        style={{flex: 1, marginTop: 20, backgroundColor: 'lightgray'}}
      >
        <FormInput
          name='name'
          title='Name'
          placeholder='Tell us your name'
          iconName='account-circle'
          { ...name }
        />
        <FormInput
          name='email'
          title='Email'
          placeholder='type@your.email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          iconName='mail-outline'
          { ...email }
        />
        <FormInput
          name='password'
          title='Password'
          placeholder='Create a password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          iconName='vpn-key'
          { ...password }
        />
      </StatelessForm>
    )
  }
}

Form = reduxForm({
  form: 'user',
  fields: ['name', 'email', 'password'],
  validate
})(Form);

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore)
function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Form />
  </Provider>
)

import { AppRegistry } from 'react-native'
AppRegistry.registerComponent('TemAcucar', () => Root)
