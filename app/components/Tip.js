import React, { View, Text } from 'react-native'
import Colors from "../Colors"

export default Tip = ({ children }) => (
  <View style={{
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  }}>
    <Text style={{
      color: Colors.white,
      fontSize: 12,
    }}>
      {children}
    </Text>
  </View>
)
