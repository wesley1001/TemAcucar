import React, { Component, View, Platform } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import Colors from "../Colors"
import DemandValidators from '../validators/DemandValidators'
import Sentence from "../components/Sentence"
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  name: DemandValidators.name,
  description: DemandValidators.description,
}

class NewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    const { onViewCreatedDemand, dashboard } = nextProps
    const { creatingDemand, createDemandError } = dashboard
    const oldCreatingDemand = this.props.dashboard.creatingDemand
    if (oldCreatingDemand && !creatingDemand && !createDemandError) {
      onViewCreatedDemand()
    }
  }

  render() {
    const { onCreateDemand, fields: { name, description }, dashboard: { createDemandError, creatingDemand } } = this.props
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
      progress < 35 ? Colors.pink : (
        progress < 75 ? Colors.darkYellow : (
          progress < 100 ? Colors.green : Colors.lightBlue
        )
      )
    )
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.beige,
        paddingTop: 40 + (Platform.OS === 'ios' ? 24 : 16),
      }}>
        <Form>
          <Headline style={{
            fontSize: 20,
            marginTop: 30,
            marginBottom: 20,
          }}>
            O que você precisa?
          </Headline>
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
            backgroundColor: Colors.white,
            borderRadius: 12,
            margin: 20,
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
              paddingTop: 3,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
              { progressMessage }
            </Sentence>
          </View>
          { createDemandError && <FormError message={DemandValidators.errorMessage(createDemandError)} /> }
          <FormSubmit
            {...this.props}
            isLoading={creatingDemand}
            onSubmit={onCreateDemand}
          >
            Pedir
          </FormSubmit>
        </Form>
      </View>
    )
  }
}

NewDemand = reduxForm({
  form: 'newDemand',
  fields: ['name', 'description'],
  validate: validateFunction(validators),
})(NewDemand)

export default NewDemand
