import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import * as ToastActions from '../actions/ToastActions'
import VersionChecker from './VersionChecker'

class ToastContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { dispatch, toast: { show, message } } = nextProps
    if (show) {
      dispatch(ToastActions.show(message))
    }
  }

  render() {
    return (
      <VersionChecker />
    )
  }
}

export default connect(state => ({
  toast: state.toast,
}))(ToastContainer)
