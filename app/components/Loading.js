import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default class Loading extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <GiftedSpinner 
          style={StyleSheets.marginBottom}
        />
      </View>
    )
  }
}
