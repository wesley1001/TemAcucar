import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Paragraph = ({ children }) => (
  <Text style={{
    alignSelf: 'stretch',
    color: Colors.brown,
    fontSize: 16,
    marginBottom: 20,
  }}>
    {children}
  </Text>
)
