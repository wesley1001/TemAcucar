import React, { Platform } from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../Colors"

export default StyledRouter = (props) => (
  <Router 
    hideNavBar={true}
    { ...props }
  >
    { props.children }
  </Router>
)
