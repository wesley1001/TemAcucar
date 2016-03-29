import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import DemandButtons from "./DemandButtons"

export default class DemandMiniature extends Component {
  handleView() {
    const { demand, onView } = this.props
    onView(demand)
  }

  render() {
    const { demand } = this.props
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)}>
        <View style={{
          backgroundColor: Colors.white,
          borderTopWidth: 4,
          borderColor: Colors.beige,
          paddingVertical: 10,
          flex: 1,
        }}>
          <DemandHeader demand={demand} />
        </View>
        <DemandButtons {...this.props} />
      </TouchableOpacity>
    )
  }
}
