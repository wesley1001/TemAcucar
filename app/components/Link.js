import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[{
      fontFamily: 'BoosterNextFY-Bold',
      fontSize: 16,
      color: Colors.brown,
    }, style]}>
      {children}
    </Text>
  </TouchableOpacity>
)
