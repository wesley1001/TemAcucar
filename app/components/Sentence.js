import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Sentence = (props) => (
  <Text style={[{
    color: Colors.brown,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  }, props.style]}>
    {props.children}
  </Text>
)
