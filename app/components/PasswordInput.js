import React from 'react-native'
import FormTextInput from "./FormTextInput"

export default PasswordInput = (props) => (
  <FormTextInput 
    name='password'
    title='Senha'
    placeholder='Digite sua senha'
    icon='key'
    autoCapitalize='none'
    secureTextEntry={true}
    { ...props }
  />
)
