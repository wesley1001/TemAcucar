import React, { Component, View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../Colors"
import Button from "../components/Button"
import Link from "../components/Link"
import Sentence from "../components/Sentence"
import LoadMore from "../components/LoadMore"
import DemandMiniature from "../components/DemandMiniature"
import NoDemands from "../components/NoDemands"

export default class Demands extends Component {
  render() {
    const { demands, currentUser, listing, canList, onList, onAccept, onRefuse, onFlag, onView } = this.props
    return (
      <View>
        { demands.map(demand => (
          <DemandMiniature
            key={demand.id}
            demand={demand}
            currentUser={currentUser}
            onAccept={onAccept}
            onFlag={onFlag}
            onRefuse={onRefuse}
            onView={onView}
          />
        )) }
        { listing && <GiftedSpinner style={{ marginTop: 10 }} /> }
        { demands.length === 0 && !listing && <NoDemands /> }
        { canList && !listing &&
          <LoadMore onPress={onList} />
        }
      </View>
    )
  }
}
