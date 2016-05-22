import React, { Component, View, Image, Platform, Dimensions } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import MapView from 'react-native-maps'
import Slider from 'react-native-slider'

import Colors from "../Colors"
import DemandValidators from '../validators/DemandValidators'
import NavBar from "../components/NavBar"
import Sentence from "../components/Sentence"
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  radius: DemandValidators.radius,
  name: DemandValidators.name,
  description: DemandValidators.description,
}

class NewDemand extends Component {
  componentDidMount() {
    const { initializeForm } = this.props
    initializeForm({radius: '2000'})
    GoogleAnalytics.trackScreenView('NewDemand')
  }

  componentWillReceiveProps(nextProps) {
    const { onViewCreatedDemand, demands } = nextProps
    const { creating, createError } = demands
    const oldCreating = this.props.demands.creating
    if (oldCreating && !creating && !createError) {
      onViewCreatedDemand()
    }
  }

  handleSlide(value) {
    const { fields: { radius } } = this.props
    radius.onChange(Math.round(value).toString())
  }

  renderMap() {
    const { auth, fields } = this.props
    const { currentUser: { latitude, longitude } } = auth
    const radius = parseInt(fields.radius.value) / 1000
    const height = Dimensions.get('window').height
    return (
      <MapView
        showsUserLocation={false}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        pitchEnabled={false}
        style={{
          height: height * (height < 570 ? 0.12 : 0.25),
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(0.02 * radius),
          longitudeDelta: parseFloat(0.02 * radius),
        }}
      >
        <MapView.Marker coordinate={{latitude, longitude}}>
          <Image source={require('../img/icon.png')} style={{width: 15, height: 15}} />
        </MapView.Marker>
      </MapView>
    )
  }

  render() {
    const { onCreateDemand, fields: { radius, name, description }, demands: { createError, creating } } = this.props
    const length = (description && description.value ? description.value.length : 0)
    const proportion = Math.round((length / 80) * 100)
    const progress = (proportion > 92 ? 100 : (proportion > 0 ? proportion + 8 : proportion))
    const progressMessage = (
      progress < 35 ? 'Para que você vai usar?' : (
        progress < 75 ? 'Quanto tempo pretende ficar?' : (
          progress < 100 ? 'Legal, agora sim!' : 'Excelente história!'
        )
      )
    )
    const progressColor = (
      progress < 35 ? Colors.mediumLightBeige : (
        progress < 75 ? Colors.lightPink : (
          progress < 100 ? Colors.mediumPink : Colors.lightBlue
        )
      )
    )
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="O que você precisa?" />
        <Form>
          { radius.value && this.renderMap() }
          <Sentence style={{
            fontFamily: 'BoosterNextFY-Bold',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 5,
          }}>
            Até onde você pode ir buscar?
          </Sentence>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginBottom: 5,
          }}>
            <Sentence style={{
              fontSize: 12,
              color: Colors.ice,
            }}>
              500m
            </Sentence>
            <Slider
              disabled={false}
              minimumValue={500}
              maximumValue={10000}
              step={100}
              value={parseInt(radius.value)}
              onValueChange={this.handleSlide.bind(this)}
              minimumTrackTintColor={Colors.pink}
              style={{
                flex: 1,
                height: 30,
                marginHorizontal: 10,
              }}
              trackStyle={{
                height: 2,
                backgroundColor: Colors.lighterPink,
              }}
              thumbStyle={{
                width: 24,
                height: 24,
                backgroundColor: Colors.pink,
                borderRadius: 12,
              }}
            />
            <Sentence style={{
              fontSize: 12,
              color: Colors.ice,
            }}>
              10km
            </Sentence>
          </View>
          <FormTextInput 
            name='name'
            title='Nome'
            placeholder='Ex. Furadeira'
            titleStyle={{ flex: 0.35 }}
            {...name}
          />
          <FormTextInput 
            name='description'
            title='Descrição'
            placeholder='Convença seus vizinhos: conte para eles porque precisa desse objeto e porque é importante para você.'
            multiline={true}
            titleStyle={{ flex: 0.35 }}
            inputStyle={{
              height: 100,
            }}
            {...description}
          />
          <View style={{
            backgroundColor: Colors.beige,
            borderRadius: 12,
            margin: 15,
            marginBottom: 0,
            flexDirection: 'row',
            height: 24,
          }}>
            <View style={{
              backgroundColor: progressColor,
              borderRadius: 12,
              height: 24,
              flex: progress,
            }}>
            </View>
            <View style={{
              flex: 100 - progress,
            }}>
            </View>
            <Sentence style={{
              fontSize: 12,
              textAlign: 'center',
              backgroundColor: 'transparent',
              position: 'absolute',
              marginTop: 3,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
              { progressMessage }
            </Sentence>
          </View>
          { createError && <FormError message={DemandValidators.errorMessage(createError)} /> }
          <FormSubmit
            {...this.props}
            isLoading={creating}
            onSubmit={onCreateDemand}
          >
            Pedir emprestado
          </FormSubmit>
        </Form>
      </View>
    )
  }
}

NewDemand = reduxForm({
  form: 'newDemand',
  fields: ['radius', 'name', 'description'],
  validate: validateFunction(validators),
})(NewDemand)

export default NewDemand
