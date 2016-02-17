import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <Text onPress={onPress} style={[{
    fontFamily: 'BoosterNextFY-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.brown,
  }, style]}>
    {children}
  </Text>
)
