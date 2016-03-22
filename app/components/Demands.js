import React, {
  Component,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../Colors"
import Button from "../components/Button"
import Link from "../components/Link"
import Sentence from "../components/Sentence"
import DemandMiniature from "../components/DemandMiniature"
import NoDemands from "../components/NoDemands"

export default class Demands extends Component {
  renderMap() {
    const { latitude, longitude } = this.props.auth.currentUser
    const { users } = this.props.neighborhood
    return (
      <View style={{
        backgroundColor: Colors.beige,
        height: 150,
      }}>
        <MapView
          style={{
            height: 150,
            alignSelf: 'stretch',
          }}
          region={{
            latitude: parseFloat(latitude), 
            longitude: parseFloat(longitude),
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          { users.map(user => (
            <MapView.Marker 
              key={user.id}
              coordinate={{
                latitude: user.latitude,
                longitude: user.longitude
              }}
              image={require('../img/marker.png')}
            />
          )) }
        </MapView>
      </View>
    )
  }

  render() {
    const { onLoadMoreDemands } = this.props
    const { latitude, longitude } = this.props.auth.currentUser
    const { users, loadingUsers, demands, loadingDemands, canLoadMoreDemands } = this.props.neighborhood
    return (
      <View style={{
        paddingBottom: 100,
      }}>
        { latitude && longitude && this.renderMap() }
        <View style={{
          backgroundColor: Colors.lightPink,
          paddingVertical: 8,
        }}>
          <Sentence style={{
            color: Colors.white, 
            fontFamily: 'OpenSans-Bold', 
            textAlign: 'center',
            fontSize: 12,
          }}>
            { loadingUsers ? "Carregando vizinhança..." : `${users.length} pessoas em sua vizinhança` }
          </Sentence>
        </View>
        { demands.map(demand => (
          <DemandMiniature {...this.props} key={demand.id} demand={demand} />
        )) }
        { loadingDemands && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { demands.length === 0 && !loadingDemands && <NoDemands /> }
        { canLoadMoreDemands && !loadingDemands &&
          <Link onPress={onLoadMoreDemands} style={{
            marginTop: 10,
            marginBottom: 20,
            textAlign: 'center',
          }}>
            Carregar mais
          </Link>
        }
      </View>
    )
  }
}
