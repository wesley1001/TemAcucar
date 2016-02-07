import React, { Text } from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"
import Button from "./Button"

export default ExpiredVersion = ({onUpdate}) => (
  <SimpleScreen headline="Sua versão está expirada ;)">
    <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
      Vai ser preciso atualizar sua versão para continuar utilizando o app do Tem Açúcar.
    </Text>
    <Button onPress={onUpdate}>
      Atualizar versão
    </Button>
  </SimpleScreen>
)
