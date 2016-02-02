import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicatorIOS,
} from 'react-native'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default class Loading extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <ActivityIndicatorIOS 
          animating={true}
          color={Colors.pink}
          style={StyleSheets.marginBottom}
        />
      </View>
    )
  }
}
