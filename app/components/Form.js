import React, { Component, View } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

import Colors from "../Colors"
import SimpleScreen from "./SimpleScreen"

export default class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isValid: false,
    }
  }

  componentWillUnmount() {
    const { name } = this.props
    GiftedFormManager.resetValues(name)
  }

  childrenWithProps() {
    const inputTypes = ['EmailInput', 'PasswordInput', 'FormTextInput']
    let nextInput = null
    let inputCount = 0
    return React.Children.map(this.props.children, (child) => child).reverse().map((child) => {
      if (child.type.name == 'FormSubmit') {
        return React.cloneElement(child, {
          isDisabled: !this.state.isValid,
        })
      } else if (inputTypes.indexOf(child.type.name) > -1) {
        inputCount++
        const input = React.cloneElement(child, {
          ref: `input${inputCount}`,
          nextInput: nextInput,
          onNextInputFocus: this.handleNextInputFocus.bind(this),
        })
        nextInput = input
        return input
      } else {
        return child
      }
    }).reverse()
  }

  handleNextInputFocus(nextInput) {
    if (nextInput) {
      const input = this.refs[nextInput.ref]
      input.focus()
    }
  }

  handleValidation(validation) {
    if (this.state.isValid !== validation.isValid) {
      this.setState({ isValid: validation.isValid })
    }
    this.props.onValidation && this.props.onValidation(validation)
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
        borderColor: Colors.lightGray,
        borderTopWidth: 0.5,
      }}>
        <GiftedForm
          scrollEnabled={false}
          formStyles={{
            containerView: {
              backgroundColor: Colors.beige,
            },
          }}
          formName={this.props.name}
          { ...this.props }
          onValidation={this.handleValidation.bind(this)}
        >
          {this.childrenWithProps()}
        </GiftedForm>
      </View>
    )
  }  
}
