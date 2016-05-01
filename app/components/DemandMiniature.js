import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import DemandButtons from "./DemandButtons"
import DemandUserButtons from "./DemandUserButtons"

export default class DemandMiniature extends Component {
  handleView() {
    const { demand, onView, admin } = this.props
    onView(demand, admin)
  }

  render() {
    const { demand, currentUser, admin } = this.props
    const Buttons = (currentUser.id === demand.user.id || (admin && currentUser.admin) ? DemandUserButtons : DemandButtons)
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        backgroundColor: Colors.white,
      }}>
        <View style={{
          borderTopWidth: 4,
          borderColor: Colors.beige,
          paddingVertical: 10,
          flex: 1,
        }}>
          <DemandHeader {...this.props} />
        </View>
        <Buttons {...this.props} />
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
        }}>
          <Icon name="keyboard-arrow-right" style={{
            backgroundColor: 'transparent',
            fontSize: 48,
            color: Colors.beige,
            marginTop: 44,
          }} />
        </View> 
      </TouchableOpacity>
    )
  }
}
