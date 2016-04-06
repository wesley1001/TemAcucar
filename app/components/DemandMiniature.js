import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import DemandButtons from "./DemandButtons"
import DemandUserButtons from "./DemandUserButtons"

export default class DemandMiniature extends Component {
  handleView() {
    const { demand, onView } = this.props
    onView(demand)
  }

  render() {
    const { demand, currentUser, admin } = this.props
    const Buttons = (currentUser.id === demand.user.id || admin ? DemandUserButtons : DemandButtons)
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)}>
        <View style={{
          backgroundColor: Colors.white,
          borderTopWidth: 4,
          borderColor: Colors.beige,
          paddingVertical: 10,
          flex: 1,
        }}>
          <DemandHeader {...this.props} />
        </View>
        <Buttons {...this.props} />
      </TouchableOpacity>
    )
  }
}
