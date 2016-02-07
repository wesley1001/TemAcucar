import React, { View } from 'react-native'
import Colors from "../styles/Colors"

export default FormFooter = ({ children }) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
  }}>
    {children}
  </View>
)
