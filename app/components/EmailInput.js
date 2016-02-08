import React from 'react-native'
import FormTextInput from "./FormTextInput"

export default EmailInput = (props) => (
  <FormTextInput 
    name='email'
    title='Email'
    placeholder='digite@seu.email'
    icon='at'
    autoCapitalize='none'
    keyboardType='email-address'
    { ...props }
  />
)
