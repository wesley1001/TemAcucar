import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import DemandButtons from "./DemandButtons"

export default class DemandMiniature extends Component {
  handleViewDemand() {
    const { demand, onView } = this.props
    onView(demand)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleViewDemand.bind(this)}>
        <View style={{
          backgroundColor: Colors.white,
          borderTopWidth: 4,
          borderColor: Colors.beige,
          paddingVertical: 10,
          flex: 1,
        }}>
          <DemandHeader {...this.props} />
        </View>
        <DemandButtons {...this.props} />
      </TouchableOpacity>
    )
  }
}
