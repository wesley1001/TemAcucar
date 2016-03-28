import React, {
  Component,
  Text,
  View,
} from 'react-native'
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
    const { onLoadMoreDemands, onFlagDemand, onCreateTransaction, onRefuseDemand, onViewDemand } = this.props
    const { demands, loadingDemands, canLoadMoreDemands } = this.props.dashboard
    return (
      <View>
        { demands.map(demand => (
          <DemandMiniature
            key={demand.id}
            demand={demand}
            onFlagDemand={onFlagDemand}
            onCreateTransaction={onCreateTransaction}
            onRefuseDemand={onRefuseDemand}
            onViewDemand={onViewDemand}
          />
        )) }
        { loadingDemands && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { demands.length === 0 && !loadingDemands && <NoDemands /> }
        { canLoadMoreDemands && !loadingDemands &&
          <LoadMore onPress={onLoadMoreDemands} />
        }
      </View>
    )
  }
}
