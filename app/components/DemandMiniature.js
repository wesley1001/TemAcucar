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
    const { demand, currentUser } = this.props
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
        { currentUser.id !== demand.user.id && <DemandButtons {...this.props} /> }
        { currentUser.id === demand.user.id && <DemandUserButtons {...this.props} /> }
      </TouchableOpacity>
    )
  }
}
