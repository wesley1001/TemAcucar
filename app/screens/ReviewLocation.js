import React, { View } from 'react-native'
import Colors from "../Colors"
import SetLocationHeader from "../components/SetLocationHeader"
import SetLocation from "../components/SetLocation"

export default ReviewLocation = (props) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.beige,
  }}>
    <SetLocationHeader />
    <SetLocation {...props} />
  </View>
)
