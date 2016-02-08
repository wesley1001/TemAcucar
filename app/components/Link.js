import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <Text onPress={onPress} style={[{
    fontSize: 16,
    color: Colors.brown,
    textDecorationLine: 'underline',
  }, style]}>
    {children}
  </Text>
)
