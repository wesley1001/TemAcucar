import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import SimplePage from "./SimplePage"
import Button from "./Button"

export default class Welcome extends Component {
  render() {
    return (
      <SimplePage headline="Compartilhe suas coisas com seus vizinhos">
        <Button onPress={Actions.signIn}>
          Já possuo cadastro
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.signUp}>
          Quero me cadastrar
        </Button>
      </SimplePage>
    )
  }
}
