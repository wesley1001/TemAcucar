import React, {
  Component,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import Slider from 'react-native-slider'
import haversine from 'haversine'

import Colors from "../Colors"
import Button from "../components/Button"
import Sentence from "../components/Sentence"
import Solicitation from "../components/Solicitation"

export default class Solicitations extends Component {
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
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
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
    const { latitude, longitude } = this.props.auth.currentUser
    const { users } = this.props.neighborhood
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
            { users.length === 0 ? "Carregando vizinhança..." : `${users.length} pessoas em sua vizinhança` }
          </Sentence>
        </View>
        <Solicitation />
        <Solicitation />
        <Solicitation />
        <Solicitation />
      </View>
    )
  }
}
