import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default class Button extends Component {
  renderText() {
    const { disabled, textStyle, children } = this.props
    return (
      <Text style={[{
        paddingHorizontal: 20,
        paddingVertical: 12,
        color: Colors.white,
        backgroundColor: Colors.pink,
        textAlign: 'center',
      }, textStyle, (disabled && { backgroundColor: Colors.gray })
      ]}>
        {children}
      </Text>
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
