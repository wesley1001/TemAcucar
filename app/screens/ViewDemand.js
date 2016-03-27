import React, { Component, View } from 'react-native'

import Sentence from "../components/Sentence"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"

export default class ViewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    const { onViewCreatedTransaction, dashboard } = nextProps
    const { creatingTransaction, createTransactionError } = dashboard
    const oldCreatingTransaction = this.props.dashboard.creatingTransaction
    if (oldCreatingTransaction && !creatingTransaction && !createTransactionError) {
      onViewCreatedTransaction()
      return
    }
    const { onDashboard, dashboard: { demands } } = nextProps
    const oldDemands = this.props.dashboard.demands
    if (demands.length !== oldDemands.length && oldDemands.length > 0) {
      onDashboard()
    }
  }

  render() {
    const { description } = this.props.demand
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          alignSelf: 'stretch',
        }}>
          <View style={{
            flex: 1,
            alignSelf: 'stretch',
          }}>
            <DemandHeader {...this.props} />
          </View>
        </View>
        <Sentence style={{
          fontSize: 10,
          padding: 20,
        }}>
          {description}
        </Sentence>
        <DemandButtons {...this.props} />
      </View>
    )
  }
}
