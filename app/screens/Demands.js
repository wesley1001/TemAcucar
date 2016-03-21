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
import Demand from "../components/Demand"
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
    const { onRefuse, onFlag, onLoadMoreDemands } = this.props
    const { latitude, longitude } = this.props.auth.currentUser
    const { users, loadingUsers, demands, loadingDemands, canLoadMoreDemands } = this.props.neighborhood
    return (
      <View style={{
        paddingBottom: 120,
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
          <Demand key={demand.id} demand={demand} onRefuse={onRefuse} onFlag={onFlag} />
        )) }
        { loadingDemands && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { demands.length === 0 && !loadingDemands && <NoDemands /> }
        { canLoadMoreDemands && !loadingDemands &&
          <Link onPress={onLoadMoreDemands} style={{
            marginTop: 10,
            textAlign: 'center',
          }}>
            Carregar mais
          </Link>
        }
      </View>
    )
  }
}
