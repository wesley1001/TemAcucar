import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import Dashboard from "../screens/Dashboard"
import NewDemand from "../screens/NewDemand"
import Demand from "../screens/Demand"

export default NeighborhoodRouter = (props) => (
  <StyledRouter {...props}>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route name="dashboard" component={Dashboard} initial={true} hideNavBar={true} type="reset" />
    <Route name="newDemand" component={NewDemand} schema="default" />
    <Route name="demand" component={Demand} schema="default" />
  </StyledRouter>
)
