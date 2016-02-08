import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default ReviewEmail = ({ currentUser: { email }, onConfirm, onUpdate }) => (
  <SimpleScreen>
    <TextBox style={{marginBottom: 36}}>
      <Text style={{fontWeight: 'bold'}}>
        { `${email} ` }
      </Text>
      é o email que você usa no dia-a-dia? Não vamos mandar spam, mas precisamos do seu email para colocar você em contato com seus vizinhos :)
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
