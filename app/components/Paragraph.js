import React from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default Paragraph = ({ children }) => (
  <Sentence style={{
    alignSelf: 'stretch',
    marginBottom: 20,
  }}>
    {children}
  </Sentence>
)
