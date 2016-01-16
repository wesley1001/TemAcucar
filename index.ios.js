import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native'

import Welcome from "./app/Welcome"

class TemAcucar extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'Vamos começar?',
          component: Welcome
        }}
      />
    )
  }
}

AppRegistry.registerComponent('TemAcucar', () => TemAcucar)
