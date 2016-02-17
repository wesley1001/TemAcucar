import React, { Component, View } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

import Colors from "../Colors"
import SimpleScreen from "./SimpleScreen"
import Form from "./Form"

export default class FormScreen extends Component {
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
    return React.Children.map(this.props.children, (child) => {
      if (!child.props.onSubmit) return child
      return React.cloneElement(child, {
        isDisabled: !this.state.isValid,
      })
    })
  }

  handleValidation(validation) {
    if (this.state.isValid !== validation.isValid)
      this.setState({ isValid: validation.isValid })
  }

  render() {
    return (
      <SimpleScreen viewStyle={{
        alignItems: 'stretch',
        flex: 1,
        paddingTop: 120,
        backgroundColor: Colors.beige,
      }}>
        <Form {...this.props}>
          { this.props.children }
        </Form>
      </SimpleScreen>
    )
  }  
}
