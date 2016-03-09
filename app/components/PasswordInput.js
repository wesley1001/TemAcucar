import React, { Component, PropTypes } from 'react-native'
import FormTextInput from "./FormTextInput"

class PasswordInput extends Component {
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

PasswordInput.propTypes = {
  value: PropTypes.string,
  valid: PropTypes.bool,
}

export default PasswordInput
