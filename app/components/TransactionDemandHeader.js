import React, { Component, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"

export default class TransactionDemandHeader extends Component {
  handleView() {
    const { demand, onViewDemand } = this.props
    onViewDemand(demand)
  }

  render() {
    return(
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        padding: 10,
        borderColor: Colors.beige,
        borderBottomWidth: 1,
      }}>
        <DemandHeader
          {...this.props}
          verb='pediu'
          hideDescription={true}
        />
      </TouchableOpacity>
    )
  }
}
