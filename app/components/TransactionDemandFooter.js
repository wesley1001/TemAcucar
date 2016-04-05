import React, { View } from 'react-native'
import Colors from "../Colors"
import DemandState from "./DemandState"

export default TransactionDemandFooter = ({ demand: { state }}) => (
  <View style={{
    backgroundColor: Colors.beige,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }}>
    <DemandState state={state} />
  </View>
)
