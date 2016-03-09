import React, { Component } from 'react-native'
import FormTextInput from "./FormTextInput"

export default class PasswordInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  blur() {
    this.refs.input.blur()
  }

  render() {
    return (
      <FormTextInput 
        ref='input'
        name='password'
        title='Senha'
        placeholder='Digite sua senha'
        icon='vpn-key'
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={true}
        { ...this.props }
      />
    )
  }
}
