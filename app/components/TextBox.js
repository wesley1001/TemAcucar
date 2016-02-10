import React, { Text } from 'react-native'
import Sentence from "./Sentence"

export default TextBox = (props) => (
  <Sentence style={[{
    marginHorizontal: 20,
  }, props.style]}>
    {props.children}
  </Sentence>
)
