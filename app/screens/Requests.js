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
      <View>
        { latitude && longitude && this.renderMap() }
        <View elevation={2} style={{
          backgroundColor: Colors.white,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          shadowOffset: {
            height: 2,
            width: 0,
          },
          overflow: 'visible',
          transform: [{'translate': [0,0,1]}],
        }}>
          <Sentence>500 m</Sentence>
          <Slider
            disabled={false}
            minimumValue={3.5}
            maximumValue={70}
            step={1}
            value={delta * 1000}
            onValueChange={this.handleSlide.bind(this)}
            onSlidingComplete={this.handleSlidingComplete.bind(this)}
            minimumTrackTintColor={Colors.pink}
            style={{ flex: 1, marginHorizontal: 20 }}
            trackStyle={{
              height: 2,
              backgroundColor: Colors.lightGray,
            }}
            thumbStyle={{
              width: 24,
              height: 24,
              backgroundColor: Colors.pink,
              borderRadius: 12,
            }}
          />
          <Sentence>10 km</Sentence>
        </View>
        <View style={{
          backgroundColor: Colors.beige,
          flex: 1,
          alignSelf: 'stretch',
          padding: 20,
        }}>
          <Sentence style={{ flex: 1, alignSelf: 'stretch' }}>Pedidos</Sentence>
        </View>
      </View>
    )
  }
}
