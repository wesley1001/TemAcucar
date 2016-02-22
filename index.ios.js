// import { AppRegistry } from 'react-native'
// import Root from './app/containers/Root'
// AppRegistry.registerComponent('TemAcucar', () => Root)

import React, { Component } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StatelessForm, InlineTextInput } from 'react-native-stateless-form'

export default class Form extends Component {
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
    const nameValid = (name && name.length > 0 ? true : false)
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const passwordValid = (password && password.length >= 8 ? true : false)
    return (
      <StatelessForm style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: 'lightgray',
      }}>
        <InlineTextInput
          title='Name'
          placeholder='Tell us your name'
          style={{ borderColor: 'gray' }}
          titleStyle={{ color: 'dimgray' }}
          inputStyle={{ color: 'slategray' }}
          messageStyle={{ color: 'red' }}
          icon={ <Icon name={'account-circle'} size={18} color={'steelblue'} /> }
          validIcon={ <Icon name='check' size={18} color='green' /> }
          invalidIcon={ <Icon name='clear' size={18} color='red' /> }
          value={name}
          valid={nameValid}
          message={name && !nameValid ? 'Please fill your name' : null}
          onChangeText={(text) => { this.setState({name: text}) }}
        />
        <InlineTextInput
          title='Email'
          placeholder='type@your.email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          style={{ borderColor: 'gray' }}
          titleStyle={{ color: 'dimgray' }}
          inputStyle={{ color: 'slategray' }}
          messageStyle={{ color: 'red' }}
          icon={ <Icon name={'mail-outline'} size={18} color={'steelblue'} /> }
          validIcon={ <Icon name='check' size={18} color='green' /> }
          invalidIcon={ <Icon name='clear' size={18} color='red' /> }
          value={email}
          valid={emailValid}
          message={email && !emailValid ? 'Please enter a valid email address' : null}
          onChangeText={(text) => { this.setState({email: text}) }}
        />
        <InlineTextInput
          title='Password'
          placeholder='Create a password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          style={{ borderColor: 'gray' }}
          titleStyle={{ color: 'dimgray' }}
          inputStyle={{ color: 'slategray' }}
          messageStyle={{ color: 'red' }}
          icon={ <Icon name={'vpn-key'} size={18} color={'steelblue'} /> }
          validIcon={ <Icon name='check' size={18} color='green' /> }
          invalidIcon={ <Icon name='clear' size={18} color='red' /> }
          value={password}
          valid={passwordValid}
          message={password && !passwordValid ? 'Password too short' : null}
          onChangeText={(text) => { this.setState({password: text}) }}
        />
      </StatelessForm>
    )
  }
}

import { AppRegistry } from 'react-native'
AppRegistry.registerComponent('TemAcucar', () => Form)
