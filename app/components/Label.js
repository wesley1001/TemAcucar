import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Label extends Component {

  render() {
    const { field, children } = this.props
    return (
      <View style={{
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}>
        <Text style={[StyleSheets.label, {flex: 1}]}>{children}</Text>
        {field.touched && field.error && <Text style={StyleSheets.error}>{field.error}</Text>}
      </View>
    )
  }
}
