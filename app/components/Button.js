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
    const { style, onPress, children } = this.props
    return (
      <TouchableHighlight style={style} onPress={onPress}>
        <Text style={StyleSheets.button}>{children}</Text>
      </TouchableHighlight>
    )
  }
}
