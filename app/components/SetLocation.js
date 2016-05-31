import React, { Platform, Dimensions, Component, View, Image } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import MapView from 'react-native-maps'

import UserValidators from '../validators/UserValidators'
import Colors from "../Colors"
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
  componentDidMount() {
    const { initializeForm, location: { address } } = this.props
    initializeForm(address)
  }

  handleSubmit() {
    const { dirty, values, initializeForm, onSearch, onSetLocation } = this.props
    if (dirty)
      return onSearch(values, initializeForm)
    onSetLocation()
  }

  renderMap() {
    const { location: { latitude, longitude } } = this.props
    const height = Dimensions.get('window').height
    const delta = (height < 570 ? 0.0025 : 0.005)
    return (
      <View>
        <MapView
          showsUserLocation={false}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          style={{
            height: height * (height < 570 ? 0.12 : 0.20),
            alignSelf: 'stretch',
          }}
          region={{
            latitude: parseFloat(latitude || -13.5412631), 
            longitude: parseFloat(longitude || -71.5518237),
            latitudeDelta: parseFloat(latitude ? delta : 50),
            longitudeDelta: parseFloat(longitude ? delta : 50),
          }}
        >
          { latitude && longitude && <MapView.Marker coordinate={{latitude, longitude}} >
            <Image source={require('../img/icon.png')} style={{width: 15, height: 15}} />
          </MapView.Marker> }
        </MapView>
        <View style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: Colors.lightPink,
            paddingVertical: 4,
            paddingHorizontal: 30,
            borderRadius: 12,
          }}>
            <Sentence style={{
              color: Colors.white, 
              fontFamily: 'OpenSans-Bold', 
              textAlign: 'center',
              fontSize: 12,
            }}>
              Seu endereço será sempre privado
            </Sentence>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { valid, dirty, fields, location: { startingUp, searching, settingLocation } } = this.props
    const { thoroughfare, subThoroughfare, complement, subLocality, locality, administrativeArea, country } = fields
    return (
      <Form>
        { this.renderMap() }
        <FormTextInput 
          name='thoroughfare'
          title='Logradouro'
          placeholder='Sua rua, etc'
          {...thoroughfare}
        />
        <FormTextInput 
          name='subThoroughfare'
          title='Número'
          placeholder='Seu número'
          {...subThoroughfare}
        />
        <FormTextInput 
          name='complement'
          title='Complemento'
          placeholder='(opcional)'
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
        <FormTextInput 
          name='country'
          title='País'
          placeholder='Seu país'
          {...country}
        />
        <FormSubmit
          {...this.props}
          isDisabled={ !valid }
          isLoading={searching || settingLocation}
          onSubmit={this.handleSubmit.bind(this)}
          style={{
            margin: 15,
            marginBottom: 0,
          }}
        >
          {dirty || !valid ? 'Buscar endereço e confirmar' : 'Confirmar endereço e continuar'}
        </FormSubmit>
      </Form>
    )
  }
}

SetLocation = reduxForm({
  form: 'setLocation',
  fields: ['thoroughfare', 'subThoroughfare', 'complement', 'subLocality', 'locality', 'administrativeArea', 'country'],
  validate: validateFunction(validators),
})(SetLocation)

export default SetLocation
