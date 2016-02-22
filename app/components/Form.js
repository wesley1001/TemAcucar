import React, { Component } from 'react-native'
import { StatelessForm } from 'react-native-stateless-form'

import Colors from "../Colors"

export default class Form extends Component {
  render() {
    return (
      <StatelessForm
        focusableTypes={['EmailInput', 'PasswordInput', 'FormTextInput']}
      >
        {this.props.children}
      </StatelessForm>
    )
  }  
}
