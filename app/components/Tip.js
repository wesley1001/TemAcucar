import React, { View } from 'react-native'
import Colors from "../Colors"

export default Tip = ({ children }) => (
  <View style={{
    borderTopWidth: 4,
    borderColor: Colors.beige,
    backgroundColor: Colors.white,
    padding: 10,
    alignItems: 'center',
  }}>
    { children }
  </View>
)
