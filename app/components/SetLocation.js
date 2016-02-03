import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  MapView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { locationGetCoordinates, locationSetCoordinates, locationGetAddress, locationSetSearch, locationSearch, locationSetLocation } from '../actions/LocationActions'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Loading from "./Loading"
import Button from "./Button"

class SetLocation extends Component {
  componentWillMount() {
    const { dispatch, currentUser: { latitude, longitude } } = this.props
    if (latitude && longitude)
      dispatch(locationSetCoordinates(latitude, longitude))
    else
      dispatch(locationGetCoordinates())
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location } = nextProps
    const { latitude, longitude, address, gettingCoordinates, getCoordinatesError, gettingAddress, getAddressError, search, searchSet } = location
    if (latitude && longitude && !address && !gettingAddress && !getAddressError)
      dispatch(locationGetAddress(latitude, longitude))
    else if (address && latitude && longitude && !search && !searchSet)
      dispatch(locationSetSearch(this.fullAddress(address)))
    else if (getCoordinatesError)
      dispatch(locationSetCoordinates(-22.9029278, -43.2096521))
  }

  fullAddress(address) {
    // In the future, when we need this in other places, we should have an Address component that localizes and displays this information
    return `${ address.name }${ (address.subLocality ? ` - ${ address.subLocality }` : '') }${ (address.locality ? ` - ${ address.locality }` : '') }${ (address.administrativeArea ? ` - ${ address.administrativeArea }` : '') }, ${ (address.country == 'Brazil' ? 'Brasil' : address.country) }`
  }

  handleSearchChange(search) {
    const { dispatch } = this.props
    dispatch(locationSetSearch(search))
  }

  handleSearch() {
    const { dispatch, location: { search } } = this.props
    dispatch(locationSearch(search))
  }

  handleSetLocation() {
    const { dispatch, location, auth: {credentials} } = this.props
    dispatch(locationSetLocation(location, credentials))
  }

  renderMap() {
    const { latitude, longitude } = this.props.location
    return (
      <MapView
        style={[StyleSheets.map, StyleSheets.marginBottom]}
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
          image: require('../img/icon.png'),
        }]}
      />
    )
  }

  renderAddress() {
    const { address } = this.props.location
    return (
      <Text style={[StyleSheets.label, {alignSelf: 'center', height: 60}]}>
        {this.fullAddress(address)}
      </Text>
    )
  }

  renderAddressLoading() {
    return (
      <GiftedSpinner 
        style={[StyleSheets.marginBottom, {height: 40}]}
      />
    )
  }

  renderSearchLoading() {
    return (
      <GiftedSpinner 
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
        <Icon name="search" size={18} style={{
          color: Colors.lightGray,
        }} />
      </TouchableOpacity>
    )    
  }

  render() {
    const { latitude, longitude, address, search, searching, gettingAddress, settingLocation } = this.props.location
    if (!(latitude && longitude))
      return(<Loading />)
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
        { this.renderMap() }
        { address && this.renderAddress() }
        { gettingAddress && this.renderAddressLoading() }
        <Button disabled={!(latitude && longitude && address) || settingLocation} viewStyle={StyleSheets.stretch} onPress={this.handleSetLocation.bind(this)}>{ settingLocation ? 'Confirmando endereço...' : 'Confirmar endereço e continuar' }</Button>
      </View>
    )
  }
}

export default connect(state => ({
  location: state.location,
}))(SetLocation)
