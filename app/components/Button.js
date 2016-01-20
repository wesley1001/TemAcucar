import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Button extends Component {
  renderText() {
    const { disabled, textStyle, children } = this.props
    return (
      <Text style={[StyleSheets.button, textStyle, (disabled && StyleSheets.disabled)]}>{children}</Text>
    )
  }

  render() {
    const { disabled, viewStyle, onPress } = this.props
    if (disabled) {
      return (
        <View style={viewStyle}>
          { this.renderText() }
        </View>
      )
    } else {
      return (
        <TouchableHighlight style={viewStyle} onPress={onPress}>
          { this.renderText() }
        </TouchableHighlight>
      )
    }
  }
}
