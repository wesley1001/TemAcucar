import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class SimplePage extends Component {
  renderHeadline() {
    const { headline } = this.props
    if (!headline)
      return
    return (
      <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
        {headline}
      </Text>
    )
  }
  render() {
    const { children, headline, viewStyle } = this.props
    return (
      <View style={[StyleSheets.container, viewStyle]}>
        <View style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
          <Image source={require('../img/logo.jpg')} style={!headline && StyleSheets.bigMarginBottom}/>
        </View>
        { this.renderHeadline() }
        {children}
      </View>
    )
  }
}
