import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import * as ToastActions from '../actions/ToastActions'
import VersionsContainer from './VersionsContainer'

class ToastContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { dispatch, toast: { show, message, type } } = nextProps
    if (show) {
      dispatch(ToastActions.show(message, type))
    }
  }

  render() {
    return (
      <VersionsContainer />
    )
  }
}

export default connect(state => ({
  toast: state.toast,
}))(ToastContainer)
