import React, { View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import Colors from "../Colors"
import TransactionMiniature from "./TransactionMiniature"

export default Transactions = (props) => (
  <View style={{
    backgroundColor: Colors.beige,
  }}>
    { props.demand.transactions.length === 0 && <GiftedSpinner style={{ margin: 20 }} /> }
    { props.demand.transactions.map(transaction => (
      <TransactionMiniature {...props} key={transaction.id} transaction={transaction} />
    )) }
  </View>
)
