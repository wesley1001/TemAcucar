import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Sentence = (props) => (
  <Text style={[{
    color: Colors.brown,
    fontFamily: 'OpenSans',
    fontSize: 16,
  }, props.style]}>
    {props.children}
  </Text>
)
