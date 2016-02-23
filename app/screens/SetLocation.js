import React, { Platform, Dimensions, Component, View } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import MapView from 'react-native-maps'

import UserValidators from '../validators/UserValidators'
import Colors from "../Colors"
import Loading from "./Loading"
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
}

class SetLocation extends Component {
  handleSubmit() {
    const { dirty, values, onSearch, onSetLocation } = this.props
    if (dirty) {
      return onSearch(values)
    }
    onSetLocation()
  }

  renderMap() {
    const { location: { latitude, longitude } } = this.props
    return (
      <MapView
        style={{
          flex: (0.25 + (Dimensions.get('window').height - 533.33333333) * 0.0015),
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude || -13.5412631), 
          longitude: parseFloat(longitude || -71.5518237),
          latitudeDelta: parseFloat(latitude ? 0.005 : 50),
          longitudeDelta: parseFloat(longitude ? 0.005 : 50),
        }}
      >
        { latitude && longitude && <MapView.Marker coordinate={{latitude, longitude}} image={require('../img/icon.png')} /> }
      </MapView>
    )
  }

  render() {
    const { valid, dirty, fields, location: { searching, settingLocation } } = this.props
    const { thoroughfare, subThoroughfare, complement, subLocality, locality, administrativeArea } = fields
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
          transform: [{'translate': [0,0,1]}],
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
        <Form>
          <FormTextInput 
            name='thoroughfare'
            title='Logradouro'
            placeholder='Sua rua, avenida, etc'
            {...thoroughfare}
          />
          <FormTextInput 
            name='subThoroughfare'
            title='Número'
            placeholder='Número de sua casa ou edifício'
            {...subThoroughfare}
          />
          <FormTextInput 
            name='complement'
            title='Complemento'
            placeholder='Número de seu apto, bloco, etc'
            {...complement}
          />
          <FormTextInput 
            name='subLocality'
            title='Bairro'
            placeholder='Seu bairro'
            {...subLocality}
          />
          <FormTextInput 
            name='locality'
            title='Cidade'
            placeholder='Sua cidade'
            {...locality}
          />
          <FormTextInput 
            name='administrativeArea'
            title='Estado'
            placeholder='Seu estado'
            {...administrativeArea}
          />
          <FormSubmit
            {...this.props}
            isLoading={searching || settingLocation}
            onSubmit={this.handleSubmit.bind(this)}
          >
            {dirty || !valid ? 'Buscar endereço e confirmar' : 'Confirmar endereço e continuar'}
          </FormSubmit>
        </Form>
      </View>
    )
  }
}

SetLocation = reduxForm({
  form: 'setLocation',
  fields: ['thoroughfare', 'subThoroughfare', 'complement', 'subLocality', 'locality', 'administrativeArea'],
  validate: validateFunction(validators),
})(SetLocation)

export default SetLocation
