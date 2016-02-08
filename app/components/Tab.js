import React, { ScrollView } from 'react-native'

export default Tab = ({ children }) => (
  <ScrollView style={{ flex: 1 }}>
    {children}
  </ScrollView>
)
