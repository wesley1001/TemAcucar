import React from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../Colors"

export default StyledRouter = (props) => (
  <Router 
    navigationBarStyle={{ backgroundColor: Colors.beige }}
    titleStyle={{ color: Colors.brown }}
    barButtonIconStyle={{ 
      tintColor: Colors.brown,
      marginTop: 16,
      marginLeft: 12,
    }}
    barButtonTextStyle={{ color: Colors.brown }}
    { ...props }
  >
    { props.children }
  </Router>
)
