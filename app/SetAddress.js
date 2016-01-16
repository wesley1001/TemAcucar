import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  MapView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicatorIOS,
} from 'react-native'

import RNGeocoder from 'react-native-geocoder'

import Colors from "./Colors"
import StyleSheets from "./StyleSheets"
import Neighborhood from "./Neighborhood"

export default class SetAddress extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      latitude: null,
      longitude: null,
      address: null,
      search: null,
      searching: false,
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
        const address = data && data[0]
        this.setState({
          address: address,
        })
      })        
    }
  }

  fullAddress(address) {
    return `${ address.name } - ${ address.subLocality } - ${ address.locality } - ${ address.administrativeArea }, ${ address.country }`
  }

  handleSearchChange(text) {
    this.setState({search: text})
  }

  handleSearch() {
    const { search } = this.state
    if (search && search.length > 0) {
      this.setState({searching: true})
      RNGeocoder.geocodeAddress(search, (error, data) => {
        if(error) { return }
        const address = data && data[0]
        this.setState({
          address: address,
          latitude: address.location.lat,
          longitude: address.location.lng,
          searching: false,
        })
      })    
    }
  }

  handleSave() {
    this.props.navigator.push({
      title: 'Minha vizinhança',
      component: Neighborhood,
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
          title: 'É aqui que você mora?',
          subtitle: 'Edite seu endereço para alterar sua localização',
          image: require('./img/icon.png'),
        }]}
      />
    )
  }

  renderAddress() {
    const { address } = this.state
    return (
      <Text style={[StyleSheets.label, StyleSheets.marginBottom]}>
        {this.fullAddress(address)}
      </Text>
    )
  }

  renderAddressLoading() {
    return (
      <ActivityIndicatorIOS 
        animating={true}
        color={Colors.pink}
        style={StyleSheets.marginBottom}
      />
    )
  }

  renderSearchLoading() {
    return (
      <ActivityIndicatorIOS 
        animating={true}
        color={Colors.pink}
        style={{
          height: 40,
          width: 40,
        }}
      />
    )
  }

  renderSearchButton() {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          padding: 10,
        }}
        onPress={this.handleSearch.bind(this)}
      >
        <Image source={require('./img/search.png')} />
      </TouchableOpacity>
    )    
  }

  render() {
    const { latitude, longitude, address, search, searching } = this.state
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Complete seu cadastro</Text>
        <Text style={[StyleSheets.label, StyleSheets.marginBottom]}>
          Precisamos saber onde você mora para descobrir quem são seus vizinhos :)
        </Text>
        <View style={{
          alignSelf: 'stretch',
          borderColor: Colors.brown, 
          borderWidth: 1,
          borderBottomWidth: 0,
          flexDirection: 'row',
        }}>
          <TextInput
            keyboardType={'default'}
            autoCapitalize={'none'}
            placeholder={'Procure seu endereço completo'}
            value={search}
            onChangeText={this.handleSearchChange.bind(this)}
            style={{
              fontSize: 16,
              height: 40,
              padding: 10,
              flex: 1,
            }}
          />
          { searching ? this.renderSearchLoading() : this.renderSearchButton() }
        </View>
        { latitude && longitude && this.renderMap() }
        { address ? this.renderAddress() : this.renderAddressLoading() }
        <TouchableHighlight
          style={[StyleSheets.flexEnd, StyleSheets.stretch]}
          onPress={this.handleSave.bind(this)}
        >
          <Text style={[StyleSheets.button]}>Confirmar endereço e continuar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
