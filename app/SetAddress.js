import React, {
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput,
  TouchableHighlight,
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
      loadingAddress: true,
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
    const { latitude, longitude } = this.state
    console.log('antes')
    console.log(RNGeocoder)
    RNGeocoder.reverseGeocodeLocation({latitude, longitude}, (error, data) => {
      console.log('depois')
      console.log(error)
      console.log(data)
    })        
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

  render() {
    const { latitude, longitude } = this.state
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Complete seu cadastro</Text>
        <Text style={[StyleSheets.label, StyleSheets.marginBottom]}>
          Precisamos saber onde você mora para descobrir quem são seus vizinhos :)
        </Text>
        { latitude && this.renderMap() }
        <TouchableHighlight style={StyleSheets.flexEnd}>
          <Text style={StyleSheets.button}>Continuar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
