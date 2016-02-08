import React, { Text } from 'react-native'

import Config from "../Config"
import SimpleScreen from "../components/SimpleScreen"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default UpdateVersion = ({ onIgnore, onUpdate, daysRemaining }) => (
  <SimpleScreen headline="Nova versão disponível">
    <TextBox style={{marginBottom: 36}}>
      Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${( daysRemaining == 1 ? 'dia' : 'dias')}. ` }Que tal atualizar?
    </TextBox>
    <Button onPress={onUpdate}>
      Atualizar para a nova versão
    </Button>
    <OrSeparator />
    <Button onPress={onIgnore}>
      Continuar com a versão atual
    </Button>
  </SimpleScreen>
)
