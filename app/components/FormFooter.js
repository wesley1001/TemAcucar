import React, { View } from 'react-native'

export default FormFooter = ({ children }) => (
  <View style={{
    alignSelf: 'stretch',
    alignItems: 'center',
  }}>
    {children}
  </View>
)
