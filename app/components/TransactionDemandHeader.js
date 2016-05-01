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
    const { index } = this.props
    return(
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        padding: 10,
        backgroundColor: (index % 2 == 0 ? Colors.pink : Colors.blue),
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        { index % 2 == 0 ? <TransactionDemandDescription {...this.props} /> : <TransactionDemandTimeAgo {...this.props} /> }
        { index % 2 == 0 ? <TransactionDemandTimeAgo {...this.props} /> : <TransactionDemandDescription {...this.props} /> }
        <View style={{
          backgroundColor: (index % 2 == 0 ? Colors.pink : Colors.blue),
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
        }}>
        </View>
      </TouchableOpacity>
    )
  }
}
