import React from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../styles/Colors"

export default StyledRouter = ({ children }) => (
  <Router 
    navigationBarStyle={{ backgroundColor: Colors.beige }}
    titleStyle={{ color: Colors.brown }}
    barButtonIconStyle={{ tintColor: Colors.brown }}
    barButtonTextStyle={{ color: Colors.brown }}
  >
    {children}
  </Router>
)
