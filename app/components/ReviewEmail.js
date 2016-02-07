import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"

export default ReviewEmail = ({ currentUser: { email }, onConfirm, onUpdate }) => (
  <SimpleScreen>
    <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
      <Text style={{fontWeight: 'bold'}}>
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
  </SimpleScreen>
)
