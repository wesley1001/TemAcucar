import React, { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Colors from "../Colors"

export default BottomGradient = ({ children, style }) => (
  <View style={[{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }, style]}>
    <LinearGradient
      colors={['rgba(255,255,255,0)', Colors.white]}
      locations={[0,0.5]}
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 40,
      }}>
      { children }
    </LinearGradient>
  </View>
)
