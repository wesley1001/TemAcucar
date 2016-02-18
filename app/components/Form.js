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
    return React.Children.map(this.props.children, (child) => {
      if (!child.props.onSubmit) return child
      return React.cloneElement(child, {
        isDisabled: !this.state.isValid,
      })
    })
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
          scrollEnabled={true}
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
