import React, { Component } from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"

export default class FormTextInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  handleSubmitEditing() {
    const { nextInput } = this.props
    this.props.onNextInputFocus && this.props.onNextInputFocus(nextInput)
  }

  render() {
    const { icon, nextInput } = this.props
    return (
      <GiftedForm.TextInputWidget
        ref='input'
        onSubmitEditing={this.handleSubmitEditing.bind(this)}
        returnKeyType={ nextInput ? 'next' : 'done' }
        clearButtonMode='while-editing'
        image={ icon && <Icon name={icon} size={15} color={Colors.darkGray} style={{
          width: 15,
          marginLeft: 13,
          marginRight: 2,
        }} /> }
        widgetStyles={{
          rowContainer: {
            borderColor: Colors.lightGray,
            borderBottomWidth: 0.5,
          },
          row: {
            marginLeft: (icon ? 0 : 10),
          },
          textInputInline: {
            fontFamily: 'OpenSans',
            backgroundColor: Colors.white,
            color: Colors.pink,
          },
          textInputTitleInline: {
            fontFamily: 'OpenSans',
            color: Colors.brown,
            fontWeight: 'bold',
            width: 98,
          },
        }}
        {...this.props}
      />
    )
  }
}
