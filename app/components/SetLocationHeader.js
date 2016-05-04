import React, { View, Platform } from 'react-native'
import Colors from "../Colors"
import Headline from "./Headline"

export default SetLocationHeader = (props) => (
  <View style={{
    borderColor: Colors.mediumLightBeige,
    borderBottomWidth: 0.5,
    alignSelf: 'stretch',
  }}>
    <Headline style={{
      fontSize: 20,
      marginTop: (Platform.OS === 'ios' ? 15 : 10),
      marginBottom: 5,
    }}>
      Onde você mora?
    </Headline>
  </View>
)
