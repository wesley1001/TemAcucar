import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as TransactionsActions from '../actions/TransactionsActions'

import TransactionDemands from "../components/TransactionDemands"

class TransactionsContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { dispatch, auth, transactions, loadTransactionDemands } = nextProps
    const { credentials, currentUser } = auth
    const { loading, loadTransactions, demands } = transactions
    if(loadTransactionDemands && demands.length === 0 && !loading) {
      this.handleList()
    }
    if(loadTransactions) {
      demands.map(demand => {
        if (demand.transactions.length === 0) {
          dispatch(TransactionsActions.listTransactions(credentials, currentUser, demand))
        }
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
