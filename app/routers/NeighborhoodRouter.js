import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import Dashboard from "../screens/Dashboard"
import NewDemand from "../screens/NewDemand"

export default NeighborhoodRouter = (props) => (
  <StyledRouter {...props}>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route name="dashboard" component={Dashboard} initial={true} hideNavBar={true} type="reset" />
    <Route name="newDemand" component={NewDemand} schema="default" />
  </StyledRouter>
)
