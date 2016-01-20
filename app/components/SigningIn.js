import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class SigningIn extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.label}>Fazendo login...</Text>
      </View>
    )
  }
}
