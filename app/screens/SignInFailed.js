import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default SignInFailed = () => (
  <SimpleScreen headline="Ooops! Seu login falhou :(">
    <TextBox style={{marginBottom: 20}}>
      Se você é usuário da versão antiga do Tem Açúcar, vai ser preciso criar uma nova senha.
    </TextBox>
    <Button onPress={Actions.requestPassword}>
      Criar uma nova senha
    </Button>
    <OrSeparator />
    <Button onPress={Actions.signIn}>
      Tentar uma vez mais
    </Button>
  </SimpleScreen>
)
