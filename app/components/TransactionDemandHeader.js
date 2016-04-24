import React, { View } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"

export default TransactionDemandHeader = (props) => (
  <View style={{
    padding: 10,
    borderColor: Colors.beige,
    borderBottomWidth: 1,
  }}>
    <DemandHeader
      {...props}
      verb='pediu'
      hideDescription={true}
    />
  </View>
)
