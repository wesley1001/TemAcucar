import React, { Platform } from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../Colors"

export default StyledRouter = (props) => (
  <Router 
    navigationBarStyle={{ backgroundColor: Colors.white }}
    titleStyle={{ color: Colors.brown }}
    barButtonIconStyle={{ 
      tintColor: Colors.brown,
      marginTop: (Platform.OS === 'ios' ? 12 : 18),
      marginLeft: 12,
    }}
    barButtonTextStyle={{ color: Colors.brown }}
    { ...props }
  >
    { props.children }
  </Router>
)
