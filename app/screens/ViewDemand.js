import React, { Component, View } from 'react-native'

import Colors from "../Colors"
import Sentence from "../components/Sentence"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"
import DemandUserButtons from "../components/DemandUserButtons"

export default class ViewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    // After accepting demand, it shows the created transaction
    const { onViewCreatedTransaction, transactions } = nextProps
    const { creating, createError } = transactions
    const oldCreating = this.props.transactions.creating
    if (oldCreating && !creating && !createError) {
      onViewCreatedTransaction()
      return
    }
    // After refusing or flagging demand, it goes to dashboard
    const { onDashboard, demands: { list } } = nextProps
    const oldList = this.props.demands.list
    if (list.length !== oldList.length && oldList.length > 0) {
      onDashboard()
    }
  }

  render() {
    const { auth: { currentUser }, demand, demands, userDemands, onFlagDemand, onCreateTransaction, onRefuseDemand, onCompleteDemand, onCancelDemand, onReactivateDemand } = this.props
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
      }}>
        <View style={{
          alignSelf: 'stretch',
          paddingHorizontal: 10,
        }}>
          <View style={{
            flex: 1,
            alignSelf: 'stretch',
            marginBottom: 20,
          }}>
            <DemandHeader
              demand={demand}
              demands={currentUser.id === demand.user.id ? userDemands.list : demands.list}
              currentUser={currentUser}
              fullHeader={true} />
          </View>
        </View>
        { currentUser.id !== demand.user.id && <DemandButtons
          currentUser={currentUser}
          demand={demand}
          demands={demands.list}
          onAccept={onCreateTransaction}
          onRefuse={onRefuseDemand}
          onFlag={onFlagDemand}
        /> }
        { currentUser.id === demand.user.id && <DemandUserButtons
          currentUser={currentUser}
          demand={demand}
          demands={userDemands.list}
          onComplete={onCompleteDemand}
          onCancel={onCancelDemand}
          onReactivate={onReactivateDemand}
        /> }
      </View>
    )
  }
}
