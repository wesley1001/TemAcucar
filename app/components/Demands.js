import React, { Component, View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import LoadMore from "./LoadMore"
import DemandMiniature from "./DemandMiniature"
import NoDemands from "./NoDemands"
import DemandsTip from "./DemandsTip"

export default class Demands extends Component {
  render() {
    const { demands, currentUser, listing, canList, onList, onAccept, onRefuse, onFlag, onComplete, onCancel, onReactivate, onView, onShare, onFacebook, facebookConnecting, admin, neighborsCount, showTip, noDemandsText } = this.props
    const tipProps = { currentUser, neighborsCount, onShare, onFacebook, facebookConnecting }
    return (
      <View>
        { demands.length === 0 && !listing  && <NoDemands text={noDemandsText} /> }
        { demands.length === 0 && showTip && <DemandsTip {...tipProps} /> }
        { demands.map((demand, index) => (
          <View key={demand.id}>
            { index === 1 && showTip && <DemandsTip {...tipProps} /> }
            <DemandMiniature
              demand={demand}
              currentUser={currentUser}
              onAccept={onAccept}
              onFlag={onFlag}
              onRefuse={onRefuse}
              onComplete={onComplete}
              onCancel={onCancel}
              onReactivate={onReactivate}
              onView={onView}
              admin={admin}
            />
          </View>
        )) }
        { demands.length === 1 && showTip && <DemandsTip {...tipProps} /> }
        { listing && <GiftedSpinner style={{ marginTop: 10 }} /> }
        { canList && !listing &&
          <LoadMore onPress={onList} />
        }
      </View>
    )
  }
}
