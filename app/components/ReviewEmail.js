import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class ReviewEmail extends Component {
  render() {
    const { currentUser: {email}, onConfirm, onUpdate } = this.props
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} style={StyleSheets.bigMarginBottom} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Confirme seu email
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          <Text style={StyleSheets.strong}>
            { `${email} ` }
          </Text>
          é o email que você usa no dia-a-dia?
        </Text>
        <Button onPress={onConfirm}>
          Sim, é este mesmo
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={onUpdate}>
          Não, quero alterar
        </Button>
      </View>
    )
  }
}
