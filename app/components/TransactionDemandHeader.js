import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import TransactionDemandDescription from "./TransactionDemandDescription"
import TransactionDemandTimeAgo from "./TransactionDemandTimeAgo"

export default class TransactionDemandHeader extends Component {
  handleView() {
    const { demand, onViewDemand } = this.props
    onViewDemand(demand)
  }

  render() {
    const { index, currentUser, demand: { user } } = this.props
    return(
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        padding: 10,
        backgroundColor: (currentUser.id === user.id ? Colors.pink : Colors.blue),
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <TransactionDemandDescription {...this.props} />
        <TransactionDemandTimeAgo {...this.props} />
      </TouchableOpacity>
    )
  }
}
