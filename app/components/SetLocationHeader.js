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
      marginTop: 15,
      marginBottom: 5,
    }}>
      Onde você mora?
    </Headline>
  </View>
)
