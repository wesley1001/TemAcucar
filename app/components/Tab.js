import React, { ScrollView } from 'react-native'
import StyleSheets from "../styles/StyleSheets"

export default Tab = ({ children }) => (
  <ScrollView style={{ flex: 1 }}>
    {children}
  </ScrollView>
)
