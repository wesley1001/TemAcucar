import React, { Text } from 'react-native'
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"

export default NetworkError = ({ onTryAgain }) => (
  <SimpleScreen headline="Oops! Ocorreu um erro ao acessar nosso servidor.">
    <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
      Por favor, verifique sua conexão ou tente novamente em alguns minutos.
    </Text>
    <Button onPress={onTryAgain}>
      Tentar novamente
    </Button>
  </SimpleScreen>
)
