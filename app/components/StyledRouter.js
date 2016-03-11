import React, { Platform } from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../Colors"

export default StyledRouter = (props) => (
  <Router 
    navigationBarStyle={{ backgroundColor: Colors.blue }}
    titleStyle={{ color: Colors.white }}
    barButtonIconStyle={{ 
      tintColor: Colors.white,
      marginTop: (Platform.OS === 'ios' ? 12 : 18),
      marginLeft: 12,
    }}
    barButtonTextStyle={{ color: Colors.brown }}
    { ...props }
  >
    { props.children }
  </Router>
)
