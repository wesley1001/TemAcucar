import React, { Component } from 'react-native'
import FormTextInput from "./FormTextInput"

export default class EmailInput extends Component {
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
        name='email'
        title='Email'
        placeholder='digite@seu.email'
        icon='mail-outline'
        autoCapitalize='none'
        keyboardType='email-address'
        { ...this.props }
      />
    )
  }
}
