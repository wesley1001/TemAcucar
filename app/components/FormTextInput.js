import React, { Platform, Component, PropTypes } from 'react-native'
import { InlineTextInput } from 'react-native-stateless-form'

import Colors from "../Colors"
import Icon from "./Icon"

class FormTextInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  blur() {
    this.refs.input.blur()
  }

  render() {
    const { icon, error, style, titleStyle, inputStyle, messageStyle } = this.props
    const message = ( error && error.length > 0 ? error[0] : null)
    const lineHeight = (Platform.OS === 'ios' ? 12 : 16)
    return (
      <InlineTextInput
        ref='input'
        { ...this.props }
        style={[{
          borderColor: Colors.mediumLightBeige,
          backgroundColor: Colors.lightBeige,
        }, style]}
        titleStyle={[{
          fontFamily: 'OpenSans',
          color: Colors.brown,
          fontSize: 12,
          lineHeight,
        }, titleStyle]}
        inputStyle={[{
          color: Colors.pink,
          backgroundColor: Colors.lightBeige,
          fontSize: 12,
          lineHeight,
        }, inputStyle]}
        messageStyle={[{
          color: Colors.darkBeige,
        }, messageStyle]}
        icon={ icon && <Icon name={icon} color={Colors.brown} /> }
        validIcon={ <Icon name='check' color={Colors.green} /> }
        invalidIcon={ <Icon name='more-horiz' color={Colors.darkBeige} /> }
        message={message}
      />
    )
  }
}

FormTextInput.propTypes = {
  value: PropTypes.string,
  valid: PropTypes.bool,
}

export default FormTextInput
