import React, { Text } from 'react-native'
import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"
import Button from "../components/Button"

export default NetworkError = ({ onTryAgain }) => (
  <SimpleScreen headline="Oops! Ocorreu um erro ao acessar nosso servidor.">
    <TextBox style={{marginBottom: 20}}>
      Por favor, verifique sua conexão ou tente novamente em alguns minutos.
    </TextBox>
    <Button onPress={onTryAgain}>
      Tentar novamente
    </Button>
  </SimpleScreen>
)
