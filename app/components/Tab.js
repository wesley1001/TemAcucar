import React, { ScrollView } from 'react-native'
import Colors from '../Colors'

export default Tab = ({ children }) => (
  <ScrollView style={{ flex: 1, alignSelf: 'stretch' }}>
    {children}
  </ScrollView>
)
