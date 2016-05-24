import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Notification from 'react-native-system-notification'
import GcmAndroid from 'react-native-gcm-android'

import * as GcmActions from '../actions/GcmActions'
import ToastContainer from './ToastContainer'

class GcmContainer extends Component {
  componentDidMount() {
    GcmAndroid.addEventListener('register', (token) => {
      const { dispatch } = this.props
      dispatch(GcmActions.register(token))
    })   
    GcmAndroid.addEventListener('notification', ({ data }) => {
      const notification = {
        id: data.id,
        triggering_user: JSON.parse(data.triggering_user || "null"),
        demand: JSON.parse(data.demand || "null"),
        transaction: JSON.parse(data.transaction || "null"),
        message: JSON.parse(data.message || "null"),
        review: JSON.parse(data.review || "null"),
        subject: data.subject,
        text: data.text,
        read: JSON.parse(data.read),
        admin: JSON.parse(data.admin),
        created_at: data.created_at,
      }
      const { dispatch } = this.props
      dispatch(GcmActions.notify(notification))
      Notification.create({
        subject: data.subject,
        message: data.sanitized_text,
      })
    })
    GcmAndroid.requestPermissions()
  }

  render() {
    return (<ToastContainer {...this.props} />)
  }
}

export default connect(state => ({
  gcm: state.gcm,
}))(GcmContainer)
