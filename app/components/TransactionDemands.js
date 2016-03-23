import React, { Component, View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import LoadMore from "../components/LoadMore"
import TransactionDemand from "../components/TransactionDemand"
import NoTransactionDemands from "../components/NoTransactionDemands"

export default class TransactionDemands extends Component {
  render() {
    const { onLoadMore, demand, transactionDemands } = this.props
    const { demands, loading, canLoadMore } = transactionDemands
    return (
      <View >
        { demands.map((demand, index) => (
          <TransactionDemand {...this.props} key={demand.id} demand={demand} index={index} />
        )) }
        { loading && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { demands.length === 0 && !loading && <NoTransactionDemands /> }
        { canLoadMore && !loading &&
          <LoadMore onPress={onLoadMore} />
        }
      </View>
    )
  }
}
