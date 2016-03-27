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
    const { onLoadMoreDemands } = this.props
    const { demands, loadingDemands, canLoadMoreDemands } = this.props.dashboard
    return (
      <View>
        { demands.map(demand => (
          <DemandMiniature {...this.props} key={demand.id} demand={demand} />
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
