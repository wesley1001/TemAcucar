import React, { Component, View, Platform, TouchableOpacity } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import Colors from "../Colors"
import ReviewValidators from '../validators/ReviewValidators'
import BorderedScreen from "../components/BorderedScreen"
import Headline from "../components/Headline"
import Sentence from "../components/Sentence"
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  rating: ReviewValidators.rating,
  text: ReviewValidators.text,
}

class NewReview extends Component {
  componentDidMount() {
    const { initializeForm, transaction, initialRating } = this.props
    initializeForm({transaction_id: transaction.id, rating: initialRating})
  }

  componentWillReceiveProps(nextProps) {
    const { onDashboard, createdReview } = nextProps
    const { creating, createError } = createdReview
    const oldCreating = this.props.createdReview.creating
    if (oldCreating && !creating && !createError) {
      onDashboard()
    }
  }

  ratingChangeFunction(rating) {
    return (() => { this.handleRatingChange(rating.toString()) }).bind(this)
  }

  handleRatingChange(rating) {
    const { fields } = this.props
    fields.rating.onChange(rating)
  }

  render() {
    const { transaction, auth, onCreateReview, fields, createdReview: { createError, creating } } = this.props
    const { text } = fields
    const rating = parseInt(fields.rating.value)
    const { currentUser } = auth
    const { demand } = transaction
    const user = (transaction.user.id === currentUser.id ? transaction.demand.user : transaction.user)
    return (
      <BorderedScreen navBar={true} navBarTitle="Como foi sua experiência?">
        <Form>
          <Headline style={{
            marginTop: 20,
            marginBottom: 0,
            fontSize: 16,
          }}>
            Avaliação para o pedido
          </Headline>
          <Headline style={{
            marginHorizontal: 10,
            marginBottom: 0,
            fontSize: 16,
            color: Colors.pink,
          }}>
            {demand.name}
          </Headline>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginBottom: 5,
          }}>
            { [1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity key={index} onPress={this.ratingChangeFunction(index)}>
                <Icon name={(index > rating ? "star-border" : "star")} style={{ color: Colors.darkYellow }} />
              </TouchableOpacity>
            )) }
          </View>
          <FormTextInput 
            name='text'
            title='Como foi?'
            placeholder={`Deu tudo certo? Conte para a vizinhança sua experiência com ${user.first_name}!`}
            multiline={true}
            titleStyle={{ flex: 0.38 }}
            inputStyle={{
              height: 100,
            }}
            {...text}
          />
          { createError && <FormError message={ReviewValidators.errorMessage(createError)} /> }
          <FormSubmit
            {...this.props}
            isLoading={creating}
            onSubmit={onCreateReview}
          >
            {`Avaliar ${user.first_name}`}
          </FormSubmit>
        </Form>
      </BorderedScreen>
    )
  }
}

NewReview = reduxForm({
  form: 'newReview',
  fields: ['transaction_id', 'rating', 'text'],
  validate: validateFunction(validators),
})(NewReview)

export default NewReview
