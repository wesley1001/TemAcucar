import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Button extends Component {

  render() {
    const { viewStyle, textStyle, onPress, children } = this.props
    return (
      <TouchableHighlight style={viewStyle} onPress={onPress}>
        <Text style={[StyleSheets.button, textStyle]}>{children}</Text>
      </TouchableHighlight>
    )
  }
}
