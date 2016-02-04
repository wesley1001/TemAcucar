import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import SimplePage from "./SimplePage"
import Button from "./Button"

export default class ReviewEmail extends Component {
  render() {
    const { currentUser: {email}, onConfirm, onUpdate } = this.props
    return (
      <SimplePage>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          <Text style={StyleSheets.strong}>
            { `${email} ` }
          </Text>
          é o email que você usa no dia-a-dia? Não vamos mandar spam, mas precisamos do seu email para colocar você em contato com seus vizinhos :)
        </Text>
        <Button onPress={onConfirm}>
          Sim, é este mesmo
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.updateEmail}>
          Não, quero alterar
        </Button>
      </SimplePage>
    )
  }
}
