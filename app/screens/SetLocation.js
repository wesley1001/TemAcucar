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
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { locationGetCoordinates, locationSetCoordinates, locationGetAddress, locationSetSearch, locationSearch, locationSetLocation, locationResetJustSearched, locationSetForm } from '../actions/LocationActions'

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
  thoroughfare: UserValidators.address_thoroughfare,
  subThoroughfare: UserValidators.address_sub_thoroughfare,
  complement: UserValidators.address_complement,
  subLocality: UserValidators.address_sub_locality,
  locality: UserValidators.address_locality,
  administrativeArea: UserValidators.address_administrative_area,
  country: UserValidators.address_country,
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
    const { latitude, longitude, address, getCoordinatesError, gettingAddress, getAddressError, startingUp, searching, settingLocation } = location
    const { submit } = this.refs
    if (latitude && longitude && !address && !gettingAddress && !getAddressError && startingUp) {
      dispatch(locationGetAddress(latitude, longitude))
    }
    else if (getCoordinatesError) {
      dispatch(locationSetCoordinates(-22.9029278, -43.2096521))
    }
    else if (!searching && !settingLocation){
      submit && submit.postSubmit()
    }
  }

  fullAddress(address) {
    // In the future, when we need this in other places, we should have an Address component that localizes and displays this information
    const country = (address.country === 'Brazil' ? 'Brasil' : (address.country || 'Brasil'))
    return `${ address.thoroughfare }${ (address.subThoroughfare ? `, ${ address.subThoroughfare }` : '') }${ (address.subLocality ? ` - ${ address.subLocality }` : '') }${ (address.locality ? ` - ${ address.locality }` : '') }${ (address.administrativeArea ? ` - ${ address.administrativeArea }` : '') }${ country ? `, ${country}` : '' }`
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

  handleValidation(validation) {
    const { dispatch, location: { search, justSearched } } = this.props
    const values = GiftedFormManager.getValues('setLocation')
    dispatch(locationSetForm(values))
    if (validation.isValid) {
      if (justSearched) {
        return dispatch(locationResetJustSearched())
      }
      const newSearch = this.fullAddress(values)
      if (newSearch !== search) {
        dispatch(locationSetSearch(newSearch))
      }
    }
  }

  handleSubmit() {
    const { dispatch, location, auth: { credentials } } = this.props
    const { search, searchChanged } = location
    if (searchChanged)
      return dispatch(locationSearch(search))
    dispatch(locationSetLocation(location, credentials))
  }

  submitText() {
    const { searching, gettingAddress, searchChanged } = this.props.location
    if (searching || gettingAddress)
      return "Buscando endereço..."
    if (searchChanged)
      return "Buscar endereço e confirmar"
    return "Confirmar endereço e continuar"
  }

  render() {
    const { latitude, longitude, address, search, searching, gettingAddress, settingLocation, form } = this.props.location
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
          <Headline style={{
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10
          }}>
            Onde você mora?
          </Headline>
        </View>
        { this.renderMap() }
        <Form name="setLocation" validators={validators} onValidation={this.handleValidation.bind(this)}>
          <FormTextInput 
            name='thoroughfare'
            title='Logradouro'
            placeholder='Sua rua, avenida, etc'
            value={ (form && form.thoroughfare) || '' }
          />
          <FormTextInput 
            name='subThoroughfare'
            title='Número'
            placeholder='Número de sua casa ou edifício'
            value={ (form && form.subThoroughfare) || '' }
          />
          <FormTextInput 
            name='complement'
            title='Complemento'
            placeholder='Número de seu apto, bloco, etc'
          />
          <FormTextInput 
            name='subLocality'
            title='Bairro'
            placeholder='Seu bairro'
            value={ (form && form.subLocality) || '' }
          />
          <FormTextInput 
            name='locality'
            title='Cidade'
            placeholder='Sua cidade'
            value={ (form && form.locality) || '' }
          />
          <FormTextInput 
            name='administrativeArea'
            title='Estado'
            placeholder='Seu estado'
            value={ (form && form.administrativeArea) || '' }
          />
          <FormSubmit
            ref="submit"
            title={this.submitText()}
            onSubmit={this.handleSubmit.bind(this)}
          />
          <GiftedForm.HiddenWidget name='country' value={ (form && form.country) || '' } />
        </Form>
      </View>
    )
  }
}

export default connect(state => ({
  location: state.location,
}))(SetLocation)
