// import { AppRegistry } from 'react-native'
// import Root from './app/containers/Root'
// AppRegistry.registerComponent('TemAcucar', () => Root)

import React, { Component } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StatelessForm, InlineTextInput } from 'react-native-stateless-form'
import { validate } from 'validate-model'

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

class FormInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  render() {
    const { iconName, name, value } = this.props
    const { valid, messages } = validate(UserValidators[name], value)
    const message = (messages && messages.length > 0 ? messages[0] : null)
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
        valid={valid}
        message={message}
        { ...this.props }
      />
    )
  }
}

class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      name: null,
      email: null,
      password: null,
    }
  }

  render() {
    const { name, email, password } = this.state
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
          value={name}
          onChangeText={(text) => { this.setState({name: text}) }}
        />
        <FormInput
          name='email'
          title='Email'
          placeholder='type@your.email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          iconName='mail-outline'
          value={email}
          onChangeText={(text) => { this.setState({email: text}) }}
        />
        <FormInput
          name='password'
          title='Password'
          placeholder='Create a password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          iconName='vpn-key'
          value={password}
          onChangeText={(text) => { this.setState({password: text}) }}
        />
      </StatelessForm>
    )
  }
}

import { AppRegistry } from 'react-native'
AppRegistry.registerComponent('TemAcucar', () => Form)
