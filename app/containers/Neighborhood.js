import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as NeighborhoodActions from '../actions/NeighborhoodActions'
import { Actions } from 'react-native-router-flux'

import NeighborhoodRouter from "../routers/NeighborhoodRouter"

class Neighborhood extends Component {
  componentWillMount() {
    const { dispatch, auth: { credentials, currentUser } } = this.props
    dispatch(NeighborhoodActions.listUsers(credentials, currentUser))
    this.handleListDemands()
  }

  handleDrawerOpen() {
    const { dispatch } = this.props
    dispatch(NeighborhoodActions.openDrawer())
  }

  handleDrawerClose() {
    const { dispatch } = this.props
    dispatch(NeighborhoodActions.closeDrawer())
  }

  handleListDemands() {
    const { dispatch, auth, neighborhood } = this.props
    const { credentials, currentUser } = auth
    const { demandsOffset } = neighborhood
    dispatch(NeighborhoodActions.listDemands(credentials, currentUser, demandsOffset))
  }

  handleRefuseDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(NeighborhoodActions.refuseDemand(credentials, currentUser, demand))
  }

  handleFlagDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(NeighborhoodActions.flagDemand(credentials, currentUser, demand))
  }

  handleNewDemand() {
    Actions.newDemand()
  }

  handleDashboard() {
    Actions.dashboard()
  }

  handleViewDemand(demand) {
    Actions.demand({
      demand,
      onDashboard: this.handleDashboard.bind(this),
      onRefuse: this.handleRefuseDemand.bind(this),
      onFlag: this.handleFlagDemand.bind(this),
    })
  }

  handleCreateDemand(demand) {
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(NeighborhoodActions.createDemand(credentials, currentUser, demand))
  }

  render() {
    return (
      <NeighborhoodRouter
        {...this.props}
        onDashboard={this.handleDashboard.bind(this)}
        onDrawerOpen={this.handleDrawerOpen.bind(this)}
        onDrawerClose={this.handleDrawerClose.bind(this)}
        onViewDemand={this.handleViewDemand.bind(this)}
        onRefuseDemand={this.handleRefuseDemand.bind(this)}
        onFlagDemand={this.handleFlagDemand.bind(this)}
        onLoadMoreDemands={this.handleListDemands.bind(this)}
        onNewDemand={this.handleNewDemand.bind(this)}
        onCreateDemand={this.handleCreateDemand.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  neighborhood: state.neighborhood,
}))(Neighborhood)
