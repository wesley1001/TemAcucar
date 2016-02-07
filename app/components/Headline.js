import React, { Text } from 'react-native'
import Colors from "../styles/Colors"

export default Headline = ({ children }) => (
  <Text style={{
    color: Colors.brown,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 36,
  }}>
    {children}
  </Text>
)
