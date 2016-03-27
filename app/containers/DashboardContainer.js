import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as DashboardActions from '../actions/DashboardActions'
import * as NeighborsActions from '../actions/NeighborsActions'
import * as TransactionsActions from '../actions/TransactionsActions'
import * as MessagesActions from '../actions/MessagesActions'
import { Actions } from 'react-native-router-flux'

import DashboardRouter from "../routers/DashboardRouter"

class DashboardContainer extends Component {
  componentWillMount() {
    const { dispatch, auth: { credentials, currentUser } } = this.props
    dispatch(NeighborsActions.list(credentials, currentUser))
    this.handleListDemands()
  }

  handleDrawerOpen() {
    const { dispatch } = this.props
    dispatch(DashboardActions.openDrawer())
  }

  handleDrawerClose() {
    const { dispatch } = this.props
    dispatch(DashboardActions.closeDrawer())
  }

  handleListDemands() {
    const { dispatch, auth, dashboard } = this.props
    const { credentials, currentUser } = auth
    const { demandsOffset } = dashboard
    dispatch(DashboardActions.listDemands(credentials, currentUser, demandsOffset))
  }

  handleRefuseDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DashboardActions.refuseDemand(credentials, currentUser, demand))
  }

  handleFlagDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DashboardActions.flagDemand(credentials, currentUser, demand))
  }

  handleNewDemand() {
    Actions.newDemand()
  }

  handleDashboard() {
    Actions.dashboard()
  }

  handleViewDemand(demand) {
    Actions.viewDemand({ demand })
  }

  handleViewTransaction(transaction) {
    Actions.viewTransaction({ transaction })
  }

  handleBack() {
    Actions.pop()
  }

  handleViewCreatedDemand() {
    const { createdDemand } = this.props.dashboard
    Actions.viewCreatedDemand({ demand: createdDemand })
  }

  handleViewCreatedTransaction() {
    const { createdTransaction } = this.props.dashboard
    Actions.viewCreatedTransaction({ transaction: createdTransaction })
  }

  handleCreateDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DashboardActions.createDemand(credentials, currentUser, demand))
  }

  handleCreateTransaction(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(TransactionsActions.create(credentials, currentUser, demand))
  }

  handleCreateMessage(message) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(MessagesActions.create(credentials, currentUser, message))
  }

  render() {
    return (
      <DashboardRouter
        {...this.props}
        onBack={this.handleBack.bind(this)}
        onDashboard={this.handleDashboard.bind(this)}
        onDrawerOpen={this.handleDrawerOpen.bind(this)}
        onDrawerClose={this.handleDrawerClose.bind(this)}
        onViewDemand={this.handleViewDemand.bind(this)}
        onRefuseDemand={this.handleRefuseDemand.bind(this)}
        onFlagDemand={this.handleFlagDemand.bind(this)}
        onLoadMoreDemands={this.handleListDemands.bind(this)}
        onNewDemand={this.handleNewDemand.bind(this)}
        onCreateDemand={this.handleCreateDemand.bind(this)}
        onViewCreatedDemand={this.handleViewCreatedDemand.bind(this)}
        onViewTransaction={this.handleViewTransaction.bind(this)}
        onCreateTransaction={this.handleCreateTransaction.bind(this)}
        onViewCreatedTransaction={this.handleViewCreatedTransaction.bind(this)}
        onCreateMessage={this.handleCreateMessage.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  dashboard: state.dashboard,
  neighbors: state.neighbors,
}))(DashboardContainer)
