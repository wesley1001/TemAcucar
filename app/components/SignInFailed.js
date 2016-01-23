import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import SignInInstructions from "../components/SignInInstructions"

export default class SignInFailed extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'Tem Açúcar?',
          component: SignInInstructions,
          passProps: this.props,
        }}
      />
    )
  }
}
