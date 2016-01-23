import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Label extends Component {
  renderError() {
    const { field, error } = this.props
    if (error) {
      return (<Text style={StyleSheets.error}>{error}</Text>)
    } else if (field.touched && field.error) {
    return (<Text style={StyleSheets.error}>{field.error}</Text>)
    }
  }

  render() {
    const { field, children } = this.props
    return (
      <View style={{
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}>
        <Text style={[StyleSheets.label, {flex: 1}]}>{children}</Text>
        { this.renderError() }
      </View>
    )
  }
}
