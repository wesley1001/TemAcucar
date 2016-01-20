import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Link extends Component {

  render() {
    const { style, onPress, children } = this.props
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={StyleSheets.link}>{children}</Text>
      </TouchableOpacity>
    )
  }
}
