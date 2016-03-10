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

export default class Requests extends Component {
  handleSlide(value) {
    const { onSetDelta } = this.props
    const { delta } = this.props.neighborhood
    const newDelta = value / 1000
    if (newDelta !== delta)
      onSetDelta && onSetDelta(newDelta)
  }

  handleSlidingComplete() {
    const { onStoreDelta } = this.props
    const delta = this.props.auth.currentUser.delta
    const newDelta = this.props.neighborhood.delta
    if (newDelta !== delta)
      onStoreDelta && onStoreDelta(newDelta)
  }

  renderMap() {
    const { latitude, longitude } = this.props.auth.currentUser
    const { delta } = this.props.neighborhood
    return (
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
        style={{
          height: 170,
          alignSelf: 'stretch',
          borderBottomWidth: 10,
          borderColor: Colors.ice,
        }}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(delta),
          longitudeDelta: parseFloat(delta),
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
    const { delta } = this.props.neighborhood
    return (
      <View style={{
        paddingBottom: 20,
      }}>
        { latitude && longitude && this.renderMap() }
        <View style={{
          flexDirection: 'row',
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 0,
        }}>
          <View style={{
            flex: 3,
            backgroundColor: Colors.beige,
            paddingVertical: 10,
            borderWidth: 1,
            borderRightWidth: 0,
            borderColor: Colors.ice,
          }}>
            <Sentence style={{color: Colors.brown, fontFamily: 'OpenSans-Bold', textAlign: 'center'}}>7 vizinhos em um raio de</Sentence>
          </View>
          <View style={{
            flex: 1,
            backgroundColor: Colors.darkIce,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderColor: Colors.darkIce,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Sentence style={{color: Colors.white, fontFamily: 'OpenSans-Bold', textAlign: 'center'}}>5 km</Sentence>
            <Icon name="keyboard-arrow-down" style={{ 
              color: Colors.white,
              marginLeft: 4,
              marginTop: 4,
            }} />
          </View>
        </View>
      </View>
    )
  }
}
