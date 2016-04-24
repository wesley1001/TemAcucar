import React, { View } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import DemandHeader from "./TransactionDemandHeader"
import TransactionDemandFooter from "./TransactionDemandFooter"
import Transactions from "./Transactions"

export default TransactionDemand = (props) => (
  <View style={{
    borderTopWidth: 4,
    borderColor: Colors.beige,
  }}>
    <TransactionDemandHeader {...props} />
    <Transactions {...props} />
    <TransactionDemandFooter {...props} />
  </View>
)
