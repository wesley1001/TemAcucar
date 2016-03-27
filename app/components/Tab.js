import React, { ScrollView, View } from 'react-native'
import Colors from '../Colors'

export default Tab = ({ children }) => (
  <ScrollView style={{
    flex: 1, 
    alignSelf: 'stretch', 
    backgroundColor: Colors.white,
  }}>
    <View style={{ paddingBottom: 100 }}>
      {children}
    </View>
  </ScrollView>
)
