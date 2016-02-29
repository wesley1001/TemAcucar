import React from 'react-native'
import { StatelessForm } from 'react-native-stateless-form'

export default Form = ({style, children}) => (
  <StatelessForm
    focusableTypes={['EmailInput', 'PasswordInput', 'FormTextInput']}
    style={style}
  >
    {children}
  </StatelessForm>
)
