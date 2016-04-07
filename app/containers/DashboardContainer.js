import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as DashboardActions from '../actions/DashboardActions'
import * as UsersActions from '../actions/UsersActions'
import * as DemandsActions from '../actions/DemandsActions'
import * as UserDemandsActions from '../actions/UserDemandsActions'
import * as AdminDemandsActions from '../actions/AdminDemandsActions'
import * as FlaggedDemandsActions from '../actions/FlaggedDemandsActions'
import * as TransactionsActions from '../actions/TransactionsActions'
import * as MessagesActions from '../actions/MessagesActions'
import * as UnreadNotificationsActions from '../actions/UnreadNotificationsActions'
import { Actions } from 'react-native-router-flux'

import Loading from "../screens/Loading"
import DashboardRouter from "../routers/DashboardRouter"

class DashboardContainer extends Component {
  componentWillMount() {
    const { dispatch, auth: { credentials, currentUser } } = this.props
    dispatch(UsersActions.list(credentials, currentUser))
    dispatch(UnreadNotificationsActions.list(credentials, currentUser))
    this.handleListDemands()
    this.handleListUserDemands()
    this.handleListTransactions()
    if (currentUser.admin) {
      this.handleListAdminDemands()
      this.handleListFlaggedDemands()
    }
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
    const { dispatch, auth, demands } = this.props
    const { credentials, currentUser } = auth
    const { offset } = demands
    dispatch(DemandsActions.list(credentials, currentUser, offset))
  }

  handleListUserDemands() {
    const { dispatch, auth, userDemands } = this.props
    const { credentials, currentUser } = auth
    const { offset } = userDemands
    dispatch(UserDemandsActions.list(credentials, currentUser, offset))
  }

  handleListAdminDemands() {
    const { dispatch, auth, adminDemands } = this.props
    const { credentials, currentUser } = auth
    const { offset } = adminDemands
    dispatch(AdminDemandsActions.list(credentials, currentUser, offset))
  }

  handleListFlaggedDemands() {
    const { dispatch, auth, flaggedDemands } = this.props
    const { credentials, currentUser } = auth
    const { offset } = flaggedDemands
    dispatch(FlaggedDemandsActions.list(credentials, currentUser, offset))
  }

  handleListTransactions() {
    const { dispatch, auth, transactions } = this.props
    const { credentials, currentUser } = auth
    const { offset } = transactions
    dispatch(TransactionsActions.list(credentials, currentUser, offset))
  }

  handleRefuseDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.refuse(credentials, currentUser, demand))
  }

  handleFlagDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.flag(credentials, currentUser, demand))
  }

  handleCompleteDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.complete(credentials, currentUser, demand))
  }

  handleCancelDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.cancel(credentials, currentUser, demand))
  }

  handleReactivateDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.reactivate(credentials, currentUser, demand))
  }

  handleReadAllNotifications() {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(UnreadNotificationsActions.readAll(credentials, currentUser))
  }

  handleNewDemand() {
    Actions.newDemand()
  }

  handleDashboard() {
    Actions.dashboard()
  }

  handleViewDemand(demand, admin = false) {
    Actions.viewDemand({ demand, admin })
  }

  handleViewTransaction(transaction) {
    Actions.viewTransaction({ transaction })
  }

  handleUserDemands() {
    Actions.userDemands()
  }

  handleAdminDemands() {
    Actions.adminDemands()
  }

  handleFlaggedDemands() {
    Actions.flaggedDemands()
  }

  handleBack() {
    Actions.pop()
  }

  handleViewCreatedDemand() {
    const { lastCreated } = this.props.demands
    Actions.viewCreatedDemand({ demand: lastCreated })
  }

  handleViewCreatedTransaction() {
    const { lastCreated } = this.props.transactions
    Actions.viewCreatedTransaction({ transaction: lastCreated })
  }

  handleCreateDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(DemandsActions.create(credentials, currentUser, demand))
  }

  handleCreateTransaction(transaction) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(TransactionsActions.create(credentials, currentUser, transaction))
  }

  handleCreateMessage(message) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(MessagesActions.create(credentials, currentUser, message))
  }

  render() {
    const { users, demands, userDemands, adminDemands, flaggedDemands, transactions, unreadNotifications } = this.props
    if (users.listing)
      return (<Loading status="Carregando mapa com seus vizinhos..." />)
    if (transactions.listing && transactions.list.length === 0)
      return (<Loading status="Carregando seu histórico de transações..." />)
    if (demands.listing && demands.list.length === 0)
      return (<Loading status="Carregando pedidos na sua vizinhança..." />)
    if (userDemands.listing && userDemands.list.length === 0)
      return (<Loading status="Carregando seus pedidos..." />)
    if (adminDemands.listing && adminDemands.list.length === 0)
      return (<Loading status="Carregando admin de pedidos..." />)
    if (flaggedDemands.listing && flaggedDemands.list.length === 0)
      return (<Loading status="Carregando admin de pedidos impróprios..." />)
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
        onCompleteDemand={this.handleCompleteDemand.bind(this)}
        onCancelDemand={this.handleCancelDemand.bind(this)}
        onReactivateDemand={this.handleReactivateDemand.bind(this)}
        onListDemands={this.handleListDemands.bind(this)}
        onListUserDemands={this.handleListUserDemands.bind(this)}
        onListAdminDemands={this.handleListAdminDemands.bind(this)}
        onListFlaggedDemands={this.handleListFlaggedDemands.bind(this)}
        onListTransactions={this.handleListTransactions.bind(this)}
        onNewDemand={this.handleNewDemand.bind(this)}
        onCreateDemand={this.handleCreateDemand.bind(this)}
        onViewCreatedDemand={this.handleViewCreatedDemand.bind(this)}
        onViewTransaction={this.handleViewTransaction.bind(this)}
        onCreateTransaction={this.handleCreateTransaction.bind(this)}
        onViewCreatedTransaction={this.handleViewCreatedTransaction.bind(this)}
        onCreateMessage={this.handleCreateMessage.bind(this)}
        onUserDemands={this.handleUserDemands.bind(this)}
        onAdminDemands={this.handleAdminDemands.bind(this)}
        onFlaggedDemands={this.handleFlaggedDemands.bind(this)}
        onReadAllNotifications={this.handleReadAllNotifications.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  dashboard: state.dashboard,
  users: state.users,
  userDemands: state.userDemands,
  adminDemands: state.adminDemands,
  flaggedDemands: state.flaggedDemands,
  demands: state.demands,
  transactions: state.transactions,
  unreadNotifications: state.unreadNotifications,
}))(DashboardContainer)
