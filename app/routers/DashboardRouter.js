import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import Dashboard from "../screens/Dashboard"
import NewDemand from "../screens/NewDemand"
import ViewDemand from "../screens/ViewDemand"
import ViewCreatedDemand from "../screens/ViewCreatedDemand"
import Chat from "../screens/Chat"

export default DashboardRouter = (props) => (
  <StyledRouter {...props}>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route name="dashboard" component={Dashboard} initial={true} hideNavBar={true} type="reset" />
    <Route name="newDemand" component={NewDemand} schema="default" />
    <Route name="viewDemand" component={ViewDemand} schema="default" />
    <Route name="viewCreatedDemand" component={ViewCreatedDemand} schema="default" type="replace" />
    <Route name="chat" component={Chat} schema="default" hideNavBar={true} />
  </StyledRouter>
)
