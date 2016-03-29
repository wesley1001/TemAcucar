import React, { Component, View } from 'react-native'

import Colors from "../Colors"
import Sentence from "../components/Sentence"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"

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
    const { demand, demands, onFlagDemand, onCreateTransaction, onRefuseDemand } = this.props
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
          }}>
            <DemandHeader demand={demand} />
          </View>
        </View>
        <DemandButtons
          demand={demand}
          demands={demands.list}
          onAccept={onCreateTransaction}
          onRefuse={onRefuseDemand}
          onFlag={onFlagDemand}
        />
      </View>
    )
  }
}
