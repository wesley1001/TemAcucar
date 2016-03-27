import React, { View } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import TransactionDemandHeader from "./TransactionDemandHeader"
import TransactionDemandFooter from "./TransactionDemandFooter"
import Transactions from "./Transactions"

export default TransactionDemand = (props) => (
  <View style={{
    margin: 10,
    marginBottom: 0,
  }}>
    <TransactionDemandHeader {...props} />
    <Transactions {...props} />
    <TransactionDemandFooter {...props} />
  </View>
)
