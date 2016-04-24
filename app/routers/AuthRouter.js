import React, { Component, Navigator } from 'react-native'
import { Route, Schema, Actions } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import Welcome from "../screens/Welcome"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import SignInForm from "../screens/SignInForm"
import SignUpForm from "../screens/SignUpForm"
import SignInFailed from "../screens/SignInFailed"
import RequestPassword from "../screens/RequestPassword"
import ResetPassword from "../screens/ResetPassword"

export default class AuthRouter extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.signInFailed(nextProps)) {
      Actions.signInFailed()
    }
  }

  signInFailed(props) {
    const { signInError, facebookError, refreshUserError } = props.auth
    return (signInError || facebookError || refreshUserError)
  }

  render() {
    const signInFailed = this.signInFailed(this.props)
    return (
      <StyledRouter {...this.props}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route name="welcome" component={Welcome} schema="default" initial={!signInFailed} />
        <Route name="signInFailed" component={SignInFailed} type="reset" initial={signInFailed} />
        <Route name="signIn" component={SignIn} schema="default" />
        <Route name="signUp" component={SignUp} schema="default" />
        <Route name="signInForm" component={SignInForm} schema="default" />
        <Route name="signUpForm" component={SignUpForm} schema="default" />
        <Route name="requestPassword" component={RequestPassword} schema="default" />
        <Route name="resetPassword" component={ResetPassword} schema="default" />
      </StyledRouter>
    )
  }
}
