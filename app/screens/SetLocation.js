import React, {
  Platform,
  Component,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import MapView from 'react-native-maps'
import GiftedSpinner from 'react-native-gifted-spinner'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { locationGetCoordinates, locationSetCoordinates, locationGetAddress, locationSetSearch, locationSearch, locationSetLocation } from '../actions/LocationActions'

import UserValidators from '../validators/UserValidators'
import Colors from "../Colors"
import Loading from "./Loading"
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import Headline from "../components/Headline"
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  address_thoroughfare: UserValidators.address_thoroughfare,
  address_sub_thoroughfare: UserValidators.address_sub_thoroughfare,
  address_complement: UserValidators.address_complement,
  address_sub_locality: UserValidators.address_sub_locality,
  address_locality: UserValidators.address_locality,
  address_administrative_area: UserValidators.address_administrative_area,
}

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
        style={{
          height: 170,
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(0.005),
          longitudeDelta: parseFloat(0.005),
        }}
      >
        <MapView.Marker 
          coordinate={{latitude, longitude}}
          title="É aqui que você mora?"
          description="Edite seu endereço para alterar sua localização"
          image={require('../img/icon.png')}
        />
      </MapView>
    )
  }

  renderAddress() {
    const { address } = this.props.location
    return (
      <View style={{
        backgroundColor: Colors.white,
      }}>
        <TextBox style={{
          alignSelf: 'center',
          height: 60,
        }}>
          {this.fullAddress(address)}
        </TextBox>
      </View>
    )
  }

  renderAddressLoading() {
    return (
      <GiftedSpinner 
        style={{
          marginBottom: 20,
          height: 40,
        }}
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

  handleSubmit() {
    console.log('aki')
  }

  render() {
    const { latitude, longitude, address, search, searching, gettingAddress, settingLocation } = this.props.location
    if (!(latitude && longitude))
      return(<Loading />)
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.beige,
      }}>
        <View elevation={3} style={{
          backgroundColor: Colors.beige,
          paddingTop: (Platform.OS === 'ios' ? 20 : 0),
          alignSelf: 'stretch',
          shadowColor: 'black',
          shadowOpacity: 0.8,
          shadowRadius: 4,
          overflow: 'visible',
          transform: [{'translate': [0,0,1]}] 
        }}>
          <Headline style={{marginTop: 15, marginBottom: 15}}>Onde você mora?</Headline>
        </View>
        { this.renderMap() }
        <Form name="setLocation" validators={validators}>
          <FormTextInput 
            name='address_thoroughfare'
            title='Logradouro'
            placeholder='Sua rua, avenida, etc'
            value={ address && address.thoroughfare }
          />
          <FormTextInput 
            name='address_sub_thoroughfare'
            title='Número'
            placeholder='Número de sua casa ou edifício'
            value={ address && address.subThoroughfare }
          />
          <FormTextInput 
            name='address_complement'
            title='Complemento'
            placeholder='Número de seu apto, bloco, etc'
          />
          <FormTextInput 
            name='address_sub_locality'
            title='Bairro'
            placeholder='Seu bairro'
            value={ address && address.subLocality }
          />
          <FormTextInput 
            name='address_locality'
            title='Cidade'
            placeholder='Sua cidade'
            value={ address && address.locality }
          />
          <FormTextInput 
            name='address_administrative_area'
            title='Estado'
            placeholder='Seu estado'
            value={ address && address.administrativeArea }
          />
          <FormSubmit
            ref="submit"
            title="Confirmar endereço e continuar"
            onSubmit={this.handleSubmit.bind(this)}
          />
        </Form>
      </View>
    )
  }
}

export default connect(state => ({
  location: state.location,
}))(SetLocation)

        // <View style={{
        //   alignSelf: 'stretch',
        //   backgroundColor: Colors.white,
        //   borderColor: Colors.lightGray, 
        //   borderTopWidth: 1,
        //   borderBottomWidth: 1,
        //   flexDirection: 'row',
        // }}>
        //   <TextInput
        //     keyboardType={'default'}
        //     autoCapitalize={'none'}
        //     placeholder={'Procure seu endereço completo'}
        //     value={search}
        //     onChangeText={this.handleSearchChange.bind(this)}
        //     style={{
        //       fontSize: 16,
        //       height: 40,
        //       padding: 10,
        //       flex: 1,
        //     }}
        //   />
        //   { searching ? this.renderSearchLoading() : this.renderSearchButton() }
        // </View>
        // <Tip>
        //   <Text style={{fontWeight: 'bold'}}>É este seu endereço?</Text> Caso não seja, é só digitar o endereço correto na busca acima e clicar na lupinha ;)
        // </Tip>
        // { address && this.renderAddress() }
        // { gettingAddress && this.renderAddressLoading() }
        // <View style={{
        //   flex: 1,
        //   alignSelf: 'stretch',
        //   padding: 10,
        //   backgroundColor: Colors.ice,
        // }}>
        //   <Button isDisabled={!(latitude && longitude && address) || settingLocation} isLoading={settingLocation} style={{ alignSelf: 'stretch' }} onPress={this.handleSetLocation.bind(this)}>Confirmar endereço e continuar</Button>
        // </View>
