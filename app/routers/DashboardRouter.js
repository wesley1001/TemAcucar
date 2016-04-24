import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import Dashboard from "../screens/Dashboard"
import About from "../screens/About"
import NewDemand from "../screens/NewDemand"
import ViewDemand from "../screens/ViewDemand"
import ViewCreatedDemand from "../screens/ViewCreatedDemand"
import ViewTransaction from "../screens/ViewTransaction"
import ViewCreatedTransaction from "../screens/ViewCreatedTransaction"
import UserDemands from "../screens/UserDemands"
import UserReviews from "../screens/UserReviews"
import AdminDemands from "../screens/AdminDemands"
import FlaggedDemands from "../screens/FlaggedDemands"

export default class DashboardRouter extends Component {
  render() {
    return (
      <StyledRouter {...this.props}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route name="dashboard" component={Dashboard} initial={true}type="reset" />
        <Route name="about" component={About} schema="default" />
        <Route name="newDemand" component={NewDemand} schema="default" />
        <Route name="viewDemand" component={ViewDemand} schema="default" />
        <Route name="viewCreatedDemand" component={ViewCreatedDemand} schema="default" type="replace" />
        <Route name="viewTransaction" component={ViewTransaction} schema="default" />
        <Route name="viewCreatedTransaction" component={ViewCreatedTransaction} schema="default" type="replace" />
        <Route name="userDemands" component={UserDemands} schema="default" />
        <Route name="userReviews" component={UserReviews} schema="default" />
        <Route name="adminDemands" component={AdminDemands} schema="default" />
        <Route name="flaggedDemands" component={FlaggedDemands} schema="default" />
      </StyledRouter>
    )
  }
}
