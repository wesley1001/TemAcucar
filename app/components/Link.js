import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <Text onPress={onPress} style={[{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: Colors.brown,
  }, style]}>
    {children}
  </Text>
)
