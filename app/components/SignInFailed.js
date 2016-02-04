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

export default class SignInFailed extends Component {
  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('../img/logo.jpg')} />
        <Text style={[StyleSheets.headline, StyleSheets.bigMarginVertical]}>
          Não foi possível fazer seu login com sucesso
        </Text>
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Se você é usuário da versão antiga do Tem Açúcar, vai ser preciso criar uma nova senha.
        </Text>
        <Button onPress={() => Actions.requestPassword({headline: 'Criar nova senha'})}>
          Criar uma nova senha
        </Button>
        <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
        <Button onPress={Actions.signIn}>
          Tentar uma vez mais
        </Button>
      </View>
    )
  }
}
