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
import Request from "../components/Request"

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
      <View style={{
        borderBottomWidth: 0.5,
        borderColor: Colors.ice,
      }}>
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
      </View>
    )
  }

  render() {
    const { latitude, longitude } = this.props.auth.currentUser
    const { delta } = this.props.neighborhood
    return (
      <View style={{
        paddingBottom: 100,
      }}>
        <View style={{
          paddingBottom: 12,
        }}>
          { latitude && longitude && this.renderMap() }
          <View style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            left: 10,
            right: 10,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
            paddingBottom: 1.5,
          }}>
            <View style={{
              flex: 3,
              backgroundColor: Colors.white,
              paddingVertical: 4,
            }}>
              <Sentence style={{
                color: Colors.brown, 
                fontFamily: 'OpenSans-Bold', 
                textAlign: 'center',
                fontSize: 12,
              }}>
                7 vizinhos em um raio de
              </Sentence>
            </View>
            <View style={{
              flex: 1,
              backgroundColor: Colors.pink,
              paddingVertical: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Sentence style={{
                color: Colors.white, 
                fontFamily: 'OpenSans-Bold', 
                textAlign: 'center',
                fontSize: 12,
              }}>
                5km
              </Sentence>
              <Icon name="keyboard-arrow-down" style={{ 
                color: Colors.white,
                marginLeft: 4,
                marginTop: 2,
                fontSize: 12,
              }} />
            </View>
          </View>
        </View>
        <View>
          <Request />
          <Request />
          <Request />
          <Request />
        </View>
      </View>
    )
  }
}
