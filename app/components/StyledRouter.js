import React, {
  Component,
} from 'react-native'
import { Router } from 'react-native-router-flux'

import Colors from "../styles/Colors"

export default class StyledRouter extends Component {
  render() {
    return (
      <Router 
        navigationBarStyle={{ backgroundColor: Colors.beige }}
        titleStyle={{ color: Colors.brown }}
        barButtonIconStyle={{ tintColor: Colors.brown }}
        barButtonTextStyle={{ color: Colors.brown }}
      >
        {this.props.children}
      </Router>
    )
  }
}
