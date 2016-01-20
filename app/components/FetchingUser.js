import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class FetchingUser extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.label}>Carregando dados do usuário...</Text>
      </View>
    )
  }
}
