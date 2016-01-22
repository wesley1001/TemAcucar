import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"
import Welcome from "../components/Welcome"

export default class SignedOut extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'Tem Açúcar?',
          component: Welcome,
          passProps: {
            onSignIn: this.props.onSignIn,
            onSignUp: this.props.onSignUp,
            onFacebook: this.props.onFacebook,
          },
        }}
      />
    )
  }
}
