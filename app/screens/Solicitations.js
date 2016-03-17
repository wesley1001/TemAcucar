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
    return (
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
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
        <MapView.Marker 
          coordinate={{latitude, longitude}}
          image={require('../img/marker.png')}
        />
      </MapView>
    )
  }

  render() {
    const { latitude, longitude } = this.props.auth.currentUser
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
            132 pessoas em sua vizinhança
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
