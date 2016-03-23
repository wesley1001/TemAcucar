import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as TransactionsActions from '../actions/TransactionsActions'
import { Actions } from 'react-native-router-flux'

import TransactionDemands from "../components/TransactionDemands"

class TransactionsContainer extends Component {
  componentWillMount() {
    this.handleList()
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth, transactions } = nextProps
    const { credentials, currentUser } = auth
    const { loadTransactions, demands } = transactions
    if(loadTransactions) {
      demands.map(demand => {
        dispatch(TransactionsActions.listTransactions(credentials, currentUser, demand))
      })
    }
  }

  handleList() {
    const { dispatch, auth, transactions } = this.props
    const { credentials, currentUser } = auth
    const { offset } = transactions
    dispatch(TransactionsActions.listDemands(credentials, currentUser, offset))
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
  transactions: state.transactions,
}))(TransactionsContainer)
