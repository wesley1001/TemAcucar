import React, { Component } from 'react-native'
import { InlineTextInput } from 'react-native-stateless-form'

import Colors from "../Colors"
import Icon from "./Icon"

export default class FormTextInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  render() {
    const { icon } = this.props
    return (
      <InlineTextInput
        ref='input'
        style={{
          borderColor: Colors.ice,
        }}
        titleStyle={{
          fontFamily: 'OpenSans',
          color: Colors.brown,
        }}
        inputStyle={{
          color: Colors.pink,
        }}
        { ...this.props }
        icon={ <Icon name={icon} color={Colors.brown} /> }
        validIcon={ <Icon name='check' color='green' /> }
        invalidIcon={ <Icon name='clear' color='red' /> }
      />
    )
  }
}
