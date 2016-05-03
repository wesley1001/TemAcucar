import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import * as ViewDemandActions from '../actions/ViewDemandActions'
import ViewDemand from '../screens/ViewDemand'

class ViewDemandContainer extends Component {
  componentWillMount() {
    const { dispatch, demand } = this.props
    dispatch(ViewDemandActions.mount(demand))
  }

  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch(ViewDemandActions.unmount())
  }

  componentWillReceiveProps(nextProps) {
    // After accepting demand, it shows the created transaction
    const { onViewCreatedTransaction, transactions } = nextProps
    const { creating, createError } = transactions
    const oldCreating = this.props.transactions.creating
    if (oldCreating && !creating && !createError) {
      onViewCreatedTransaction()
      return
    }
    const { onDashboard, viewDemand: { shouldGoToDashboard } } = nextProps
    if (shouldGoToDashboard) {
      onDashboard()
    }
  }

  render() {
    const { demand } = this.props.viewDemand
    return (
      <ViewDemand {...this.props} demand={demand || this.props.demand} />
    )
  }
}

export default connect(state => ({
  viewDemand: state.viewDemand,
}))(ViewDemandContainer)
