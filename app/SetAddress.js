import React, {
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native'

import RNGeocoder from 'react-native-geocoder'

import Colors from "./Colors"
import StyleSheets from "./StyleSheets"

export default class SetAddress extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      latitude: null,
      longitude: null,
      address: null,
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        this.setState({latitude, longitude})
      },
      (error) => {
        console.log(error)
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  componentDidUpdate() {
    if (!this.state.address) {
      const { latitude, longitude } = this.state
      RNGeocoder.reverseGeocodeLocation({latitude, longitude}, (error, data) => {
        if(error) { return }
        this.setState({address: data && data[0] })
      })        
    }
  }

  renderMap() {
    const { latitude, longitude } = this.state
    return (
      <MapView
        style={[{
          height: 200,
          alignSelf: 'stretch',
          borderWidth: 1,
          borderColor: Colors.brown,
          borderRadius: 4,
        }, StyleSheets.marginBottom]}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(0.005),
          longitudeDelta: parseFloat(0.005),
        }}
        annotations={[{
          latitude: latitude,
          longitude: longitude,
          title: 'Você está aqui',
          subtitle: 'Arraste para alterar sua localização',
          draggable: true,
          image: require('./img/icon.png'),
        }]}
      />
    )
  }

  renderAddress() {
    const { address } = this.state
    return (
      <Text style={[StyleSheets.label, StyleSheets.marginBottom]}>
        { address.name } - { address.subLocality } - { address.locality } - { address.administrativeArea }, { address.country }
      </Text>
    )
  }

  renderLoading() {
    return (
      <ActivityIndicatorIOS 
        animating={true}
        color={Colors.pink}
        style={StyleSheets.marginBottom}
      />
    )
  }

  render() {
    const { latitude, longitude, address } = this.state
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Complete seu cadastro</Text>
        <Text style={[StyleSheets.label, StyleSheets.marginBottom]}>
          Precisamos saber onde você mora para descobrir quem são seus vizinhos :)
        </Text>
        { latitude && this.renderMap() }
        { address ? this.renderAddress() : this.renderLoading() }
        <TouchableHighlight style={StyleSheets.flexEnd}>
          <Text style={StyleSheets.button}>Continuar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
