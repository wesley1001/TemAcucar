import React, { Platform } from 'react-native'
import { Router } from 'react-native-router-flux'
import Colors from "../Colors"

export default StyledRouter = (props) => (
  <Router 
    navigationBarStyle={{ backgroundColor: Colors.white }}
    titleStyle={{ color: Colors.pink }}
    barButtonIconStyle={{ 
      tintColor: Colors.pink,
      marginTop: (Platform.OS === 'ios' ? 12 : 18),
      marginLeft: 12,
    }}
    barButtonTextStyle={{ color: Colors.pink }}
    { ...props }
  >
    { props.children }
  </Router>
)
