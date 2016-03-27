import React, { Text } from 'react-native'
import Sentence from "./Sentence"

export default TextBox = (props) => (
  <Sentence style={[{
    marginHorizontal: 30,
    lineHeight: 16,
    textAlign: 'center',
  }, props.style]}>
    {props.children}
  </Sentence>
)
