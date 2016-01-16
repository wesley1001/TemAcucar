import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "./StyleSheets"

export default class Neighborhood extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.headline}>Minha vizinhança</Text>
      </View>
    )
  }
}
