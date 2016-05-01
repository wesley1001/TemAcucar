import React, { View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import Colors from "../Colors"
import TransactionMiniature from "./TransactionMiniature"

export default Transactions = (props) => (
  <View>
    { props.demand.transactions.map((transaction, index) => (
      <TransactionMiniature {...props} key={transaction.id} transaction={transaction} index={index} />
    )) }
  </View>
)
