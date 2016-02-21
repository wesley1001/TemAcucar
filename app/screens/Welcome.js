import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default Welcome = () => (
  <SimpleScreen headline="Compartilhe coisas com seus vizinhos">
    <Button onPress={Actions.signIn}>
      Já possuo cadastro
    </Button>
    <OrSeparator />
    <Button onPress={Actions.signUp}>
      Quero me cadastrar
    </Button>
  </SimpleScreen>
)
