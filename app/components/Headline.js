import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Headline = (props) => (
  <Text style={[{
    color: Colors.brown,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 36,
  }, props.style]}>
    {props.children}
  </Text>
)
