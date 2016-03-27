import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <Text onPress={onPress} style={[{
    fontFamily: 'BoosterNextFY-Bold',
    fontSize: 16,
    color: Colors.brown,
  }, style]}>
    {children}
  </Text>
)
