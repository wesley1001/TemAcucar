import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Headline = (props) => (
  <Text style={[{
    color: Colors.brown,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 36,
    fontFamily: 'BoosterNextFY-Bold',
  }, props.style]}>
    {props.children}
  </Text>
)
