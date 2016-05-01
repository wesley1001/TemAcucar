import React, { Platform } from 'react-native'
import Sentence from "./Sentence"

export default TextBox = (props) => (
  <Sentence style={[{
    marginHorizontal: 16,
    lineHeight: (Platform.OS === 'ios' ? 16 : 18),
    textAlign: 'center',
  }, props.style]}>
    {props.children}
  </Sentence>
)
