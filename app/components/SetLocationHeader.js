import React, { View, Platform } from 'react-native'
import Colors from "../Colors"
import Headline from "./Headline"

export default SetLocationHeader = (props) => (
  <View elevation={3} style={{
    paddingTop: (Platform.OS === 'ios' ? 20 : 0),
    backgroundColor: Colors.beige,
    alignSelf: 'stretch',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    overflow: 'visible',
    transform: [{'translate': [0,0,1]}],
  }}>
    <Headline style={{
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10
    }}>
      Onde você mora?
    </Headline>
  </View>
)
