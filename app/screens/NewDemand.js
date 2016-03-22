import React, { Component } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import DemandValidators from '../validators/DemandValidators'
import FormScreen from "../components/FormScreen"
import FormTextInput from "../components/FormTextInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  name: DemandValidators.name,
  description: DemandValidators.description,
}

class NewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    const { onDashboard, neighborhood } = nextProps
    const { creatingDemand, createDemandError } = neighborhood
    const oldCreatingDemand = this.props.neighborhood.creatingDemand
    if (oldCreatingDemand && !creatingDemand && !createDemandError) {
      onDashboard()
    }
  }

  render() {
    const { onCreateDemand, fields: { name, description }, neighborhood: { createDemandError, creatingDemand } } = this.props
    return (
      <FormScreen>
        <FormTextInput 
          name='name'
          title='O que você precisa?'
          placeholder='Conte o que você precisa (Ex. Furadeira)'
          icon='keyboard'
          {...name}
        />
        <FormTextInput 
          name='description'
          title='Para que você vai usar?'
          placeholder='Convença seus vizinhos: conte para eles porque precisa desse objeto e porque é importante para você.'
          icon='keyboard'
          {...description}
        />
        { createDemandError && <FormError message={DemandValidators.errorMessage(createDemandError)} /> }
        <FormSubmit
          {...this.props}
          isLoading={creatingDemand}
          onSubmit={onCreateDemand}
        >
          Enviar pedido
        </FormSubmit>
      </FormScreen>
    )
  }
}

NewDemand = reduxForm({
  form: 'newDemand',
  fields: ['name', 'description'],
  validate: validateFunction(validators),
})(NewDemand)

export default NewDemand
