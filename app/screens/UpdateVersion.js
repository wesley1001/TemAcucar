import React, { Text } from 'react-native'

import Config from "../Config"
import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"

export default UpdateVersion = ({ onIgnore, onUpdate, daysRemaining }) => (
  <SimpleScreen headline="Nova versão disponível">
    <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
      Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${( daysRemaining == 1 ? 'dia' : 'dias')}. ` }Que tal atualizar?
    </Text>
    <Button onPress={onUpdate}>
      Atualizar para a nova versão
    </Button>
    <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
    <Button onPress={onIgnore}>
      Continuar com a versão atual
    </Button>
  </SimpleScreen>
)
