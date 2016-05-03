import React, { Component, Navigator } from 'react-native'
import { Route, Schema } from 'react-native-router-flux'

import Router from "../components/Router"
import ReviewEmail from "../screens/ReviewEmail"
import UpdateEmail from "../screens/UpdateEmail"

export default ReviewEmailRouter = (props) => (
  <Router {...props}>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route name="reviewEmail" component={ReviewEmail} schema="default" initial={true} />
    <Route name="updateEmail" component={UpdateEmail} schema="default" />
  </Router>
)
