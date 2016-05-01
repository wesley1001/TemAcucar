import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import TextBox from "../components/TextBox"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default ReviewEmail = ({ auth: { currentUser: { email } }, onConfirm }) => (
  <SimpleScreen>
    <Headline style={{fontSize: 14, marginBottom: 10}}>{email}</Headline>
    <TextBox style={{marginBottom: 20}}>
      Este é o seu email do dia-a-dia? Nunca enviaremos spam, mas precisamos do seu email para te colocar em contato com seus vizinhos :)
    </TextBox>
    <Button onPress={onConfirm}>
      Sim, é este mesmo
    </Button>
    <OrSeparator />
    <Button onPress={Actions.updateEmail}>
      Não, quero alterar
    </Button>
  </SimpleScreen>
)
