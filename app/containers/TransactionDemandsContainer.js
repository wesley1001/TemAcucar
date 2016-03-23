import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as TransactionDemandsActions from '../actions/TransactionDemandsActions'
import { Actions } from 'react-native-router-flux'

import TransactionDemands from "../components/TransactionDemands"

class TransactionDemandsContainer extends Component {
  componentWillMount() {
    const { dispatch, auth: { credentials, currentUser } } = this.props
    this.handleList()
  }

  handleList() {
    const { dispatch, auth, transactionDemands } = this.props
    const { credentials, currentUser } = auth
    const { offset } = transactionDemands
    dispatch(TransactionDemandsActions.list(credentials, currentUser, offset))
  }

  render() {
    return (
      <TransactionDemands
        {...this.props}
        onLoadMore={this.handleList.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  transactionDemands: state.transactionDemands,
}))(TransactionDemandsContainer)
