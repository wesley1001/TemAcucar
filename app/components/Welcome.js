import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class Welcome extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
        <Button onPress={Actions.signIn}>
          Já possuo cadastro
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.signUp}>
          Quero me cadastrar
        </Button>
      </View>
    )
  }
}
