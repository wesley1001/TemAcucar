import React, { View } from 'react-native'
import Colors from "../Colors"
import TransactionDemandDescription from "./TransactionDemandDescription"
import TransactionDemandTimeAgo from "./TransactionDemandTimeAgo"

export default TransactionDemandHeader = (props) => (
  <View style={{
    backgroundColor: (props.index % 2 == 0 ? Colors.pink : Colors.blue),
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  }}>
    { props.index % 2 == 0 ? <TransactionDemandDescription {...props} /> : <TransactionDemandTimeAgo {...props} /> }
    { props.index % 2 == 0 ? <TransactionDemandTimeAgo {...props} /> : <TransactionDemandDescription {...props} /> }
  </View>
)
