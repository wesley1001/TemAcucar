import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../styles/Colors"

export default Link = ({style, onPress, children}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={{
      paddingHorizontal: 20,
      paddingVertical: 12,
      fontSize: 16,
      color: Colors.brown,
      textDecorationLine: 'underline',
    }}>
      {children}
    </Text>
  </TouchableOpacity>
)
