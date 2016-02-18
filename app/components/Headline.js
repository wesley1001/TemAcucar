import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Headline = (props) => (
  <Text style={[{
    fontFamily: 'BoosterNextFY-Bold',
    color: Colors.brown,
    fontSize: 28,
    lineHeight: 30,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 36,
  }, props.style]}>
    {props.children}
  </Text>
)
