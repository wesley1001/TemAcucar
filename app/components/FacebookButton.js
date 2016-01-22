import React, {
  Component,
  StyleSheet,
  NativeModules,
} from 'react-native'
const FBLoginManager = NativeModules.FBLoginManager

import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

export default class FacebookButton extends Component {
  componentWillMount() {
    // TODO implement this on the actions instead
    FBLoginManager.logout(function(error, data){
      console.log(error, data);
    })
  }

  handlePress() {
    const { onFacebookSuccess, onFacebookFailure } = this.props
    FBLoginManager.loginWithPermissions(["public_profile", "email", "user_friends", "user_about_me"], (error, data) => {
      if (!error) {
        onFacebookSuccess && onFacebookSuccess(data)
      } else {
        onFacebookFailure && onFacebookFailure(data)
      }
    })
  }

  render() {
    return (
      <Button onPress={this.handlePress.bind(this)} textStyle={StyleSheets.facebook}>
        Faça login com seu Facebook
      </Button>
    )
  }
}
