import React, {
  Component,
  Text,
} from 'react-native'
import Libraries, { LinkingIOS } from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"

export default class ExpiredVersion extends Component {
  render() {
    const { onTryAgain } = this.props
    return (
      <SimpleScreen headline="Oops! Ocorreu um erro ao acessar nosso servidor.">
        <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
          Por favor, verifique sua conexão ou tente novamente em alguns minutos.
        </Text>
        <Button onPress={onTryAgain}>
          Tentar novamente
        </Button>
      </SimpleScreen>
    )
  }
}
