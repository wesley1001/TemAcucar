// import { AppRegistry } from 'react-native'
// import Root from './app/containers/Root'
// AppRegistry.registerComponent('TemAcucar', () => Root)

import React, { AppRegistry, Component, View, Text } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

class Root extends Component {
  render() {
    return (
      <View>
        <Text>ABC</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('TemAcucar', () => Root)
