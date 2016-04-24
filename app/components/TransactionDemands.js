import React, { Component, View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import LoadMore from "../components/LoadMore"
import TransactionDemand from "../components/TransactionDemand"
import NoTransactionDemands from "../components/NoTransactionDemands"

export default class TransactionDemands extends Component {
  render() {
    const { onList, onView, onComplete, onCancel, onReactivate, onBack, demands, listing, canList, currentUser } = this.props
    return (
      <View >
        { demands.map((demand, index) => (
          <TransactionDemand
            key={demand.id}
            demand={demand}
            index={index}
            currentUser={currentUser}
            onView={onView}
            onComplete={onComplete}
            onCancel={onCancel}
            onBack={onBack}
          />
        )) }
        { listing && <GiftedSpinner style={{ marginTop: 10 }} /> }
        { demands.length === 0 && !listing && <NoTransactionDemands /> }
        { canList && !listing &&
          <LoadMore onPress={onList} />
        }
      </View>
    )
  }
}
