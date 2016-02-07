import React, {
  Component,
  View,
  Image,
} from 'react-native'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Headline from "./Headline"

export default class SimpleScreen extends Component {
  renderHeadline() {
    const { headline } = this.props
    if (!headline) return
    return (
      <Headline>{headline}</Headline>
    )
  }
  render() {
    const { children, headline, viewStyle } = this.props
    return (
      <View style={
        [{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
        }, viewStyle]
      }>
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
