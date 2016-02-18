import React, {
  Component,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import Slider from 'react-native-slider'

import Colors from "../Colors"
import Button from "../components/Button"

export default class Requests extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      delta: 0.02,
    }
  }

  handleSlide(value) {
    this.setState({delta: (value / 1000)})
  }

  renderMap() {
    const { latitude, longitude } = this.props.currentUser
    const { delta } = this.state

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
    const { latitude, longitude } = this.props.currentUser
    const delta = this.state.delta * 1000
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
          shadowOpacity: 0.8,
          shadowRadius: 4,
          overflow: 'visible',
          transform: [{'translate': [0,0,1]}],
        }}>
          <Sentence>1 km</Sentence>
          <Slider
            disabled={false}
            minimumValue={1}
            maximumValue={50}
            step={1}
            value={delta}
            onValueChange={this.handleSlide.bind(this)}
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
              shadowColor: Colors.black,
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 2,
              shadowOpacity: 1,
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
