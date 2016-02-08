import React, { Text } from 'react-native'

import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"
import Button from "../components/Button"

export default ExpiredVersion = ({ onUpdate }) => (
  <SimpleScreen headline="Sua versão está expirada ;)">
    <TextBox style={{marginBottom: 36}}>
      Vai ser preciso atualizar sua versão para continuar utilizando o app do Tem Açúcar.
    </TextBox>
    <Button onPress={onUpdate}>
      Atualizar versão
    </Button>
  </SimpleScreen>
)
