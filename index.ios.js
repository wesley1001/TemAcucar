// import { AppRegistry } from 'react-native'
// import Root from './app/containers/Root'
// AppRegistry.registerComponent('TemAcucar', () => Root)

import React, { AppRegistry, Component, View, Text } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import ExNavigator from '@exponent/react-native-navigator'
import moment from 'moment'

const validators = {
  fullName: {
    title: 'Full name',
    validate: [{
      validator: 'isLength',
      arguments: [1, 23],
      message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
    }]
  },
  gender: {
    title: 'Gender',
    validate: [{
      validator: (...args) => {
        if (args[0] === undefined) {
          return false;
        }
        return true;
      },
      message: '{TITLE} is required',
    }]
  },
  birthday: {
    title: 'Birthday',
    validate: [{
      validator: 'isBefore',
      arguments: [moment().utc().subtract(18, 'years').format('YYYY-MM-DD')],
      message: 'You must be at least 18 years old'
    }, {
      validator: 'isAfter',
      arguments: [moment().utc().subtract(100, 'years').format('YYYY-MM-DD')],
      message: '{TITLE} is not valid'
    }]
  },
  country: {
    title: 'Country',
    validate: [{
      validator: 'isLength',
      arguments: [2],
      message: '{TITLE} is required'
    }]
  },
  bio: {
    title: 'Biography',
    validate: [{
      validator: 'isLength',
      arguments: [0, 512],
      message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
    }]
  },
  tos: {
    title: 'Terms of service',
    validate: [{
      validator: 'isBoolean',
      message: '{TITLE} must be true or false'
    }]
  },
}

class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        fullName: 'Marco Polo',
        tos: false,
      }
    }
  }

  handleValidation() {
    const values = GiftedFormManager.getValues('signupForm')
    this.setState({ form: values })
  }

  render() {
    const { fullName, tos } = this.state.form
    console.log('render', this.state.form)
    return (
      <GiftedForm
        formName='signupForm'
        openModal={(route) => { this.props.navigator.push(route) }}
        validators={validators}
        onValidation={this.handleValidation.bind(this)}
      >
        <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='fullName'
          title='Full name'
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
          value={fullName}
        />
        <GiftedForm.ModalWidget
          title='Gender'
          displayValue='gender'
        >
          <GiftedForm.SeparatorWidget />
          <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
            <GiftedForm.OptionWidget title='Female' value='F'/>
            <GiftedForm.OptionWidget title='Male' value='M'/>
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
        <GiftedForm.ModalWidget
          title='Birthday'
          displayValue='birthday'
          scrollEnabled={false}
        >
          <GiftedForm.SeparatorWidget/>
          <GiftedForm.DatePickerIOSWidget
            name='birthday'
            mode='date'
            getDefaultDate={() => {
              return new Date(((new Date()).getFullYear() - 18)+'');
            }}
          />
        </GiftedForm.ModalWidget>
        <GiftedForm.ModalWidget
          title='Country'
          displayValue='country'
          scrollEnabled={false}
        >
          <GiftedForm.SelectCountryWidget 
            code='alpha2' 
            name='country' 
            title='Country' 
            autoFocus={true}
          />
        </GiftedForm.ModalWidget>
        <GiftedForm.ModalWidget
          title='Biography'
          displayValue='bio'
        >
          <GiftedForm.SeparatorWidget/>
          <GiftedForm.TextAreaWidget
            name='bio'
            autoFocus={true}
            placeholder='Something interesting about yourself'
          />
        </GiftedForm.ModalWidget>
        <GiftedForm.SubmitWidget
          title='Sign up'
        />
        <GiftedForm.NoticeWidget 
          title='By signing up, you agree to the Terms of Service and Privacy Policity.'
        />
        <GiftedForm.HiddenWidget name='tos' value={tos} />
      </GiftedForm>
    )
  }
}

class Navigator extends Component {
  render() {
    return (
      <ExNavigator
        initialRoute={Router.getFormRoute()}
        style={{ flex: 1 }}
        sceneStyle={{ paddingTop: 64 }}
      />
    )
  }
}
const Router = { getFormRoute() { return { getSceneClass() { return Form } } } }

AppRegistry.registerComponent('TemAcucar', () => Navigator)
