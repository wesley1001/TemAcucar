import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import Router from "../components/Router"
import Dashboard from "../screens/Dashboard"
import Settings from "../screens/Settings"
import About from "../screens/About"
import NewDemand from "../screens/NewDemand"
import NewReview from "../screens/NewReview"
import ViewTransaction from "../screens/ViewTransaction"
import UserDemands from "../screens/UserDemands"
import UserReviews from "../screens/UserReviews"
import AdminDemands from "../screens/AdminDemands"
import FlaggedDemands from "../screens/FlaggedDemands"
import LocationContainer from "../containers/LocationContainer"
import ViewDemandContainer from "../containers/ViewDemandContainer"

export default class DashboardRouter extends Component {
  render() {
    return (
      <Router {...this.props}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route name="dashboard" component={Dashboard} initial={true}type="reset" />
        <Route name="settings" component={Settings} schema="default" />
        <Route name="about" component={About} schema="default" />
        <Route name="newDemand" component={NewDemand} schema="default" />
        <Route name="newReview" component={NewReview} schema="default" />
        <Route name="viewDemand" component={ViewDemandContainer} schema="default" />
        <Route name="viewCreatedDemand" component={ViewDemandContainer} schema="default" type="replace" />
        <Route name="viewTransaction" component={ViewTransaction} schema="default" />
        <Route name="viewCreatedTransaction" component={ViewTransaction} schema="default" type="replace" />
        <Route name="userDemands" component={UserDemands} schema="default" />
        <Route name="userReviews" component={UserReviews} schema="default" />
        <Route name="adminDemands" component={AdminDemands} schema="default" />
        <Route name="flaggedDemands" component={FlaggedDemands} schema="default" />
        <Route name="setLocation" component={LocationContainer} schema="default" />
      </Router>
    )
  }
}
