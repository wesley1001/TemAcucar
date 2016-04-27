import React from 'react-native'
import Colors from "../Colors"
import TextBox from "./TextBox"

export default FormError = ({ message }) => (
  <TextBox style={{
    color: Colors.red, 
    marginTop: 24,
  }}>
    {message}
  </TextBox>
)
