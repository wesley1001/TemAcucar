import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native'
import { Router, Route, Schema, Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import Welcome from "../components/Welcome"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import SignInFailed from "../components/SignInFailed"
import RequestPassword from "../components/RequestPassword"
import ResetPassword from "../components/ResetPassword"

export default class SignedOut extends Component {
  componentWillUnmount() {
    Actions.currentRouter = null
  }

  render() {
    return (
      <Router 
        navigationBarStyle={StyleSheets.navBar}
        titleStyle={StyleSheets.navBarTitle}
        barButtonIconStyle={StyleSheets.navBarIcon}
        barButtonTextStyle={StyleSheets.navBarIconText}
      >
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route {...this.props} name="welcome" component={Welcome} initial={true} title="Tem Açúcar?" schema="default" />
        <Route {...this.props} name="signIn" component={SignIn} title="Login" schema="default" />
        <Route {...this.props} name="signUp" component={SignUp} title="Cadastre-se" schema="default" />
        <Route {...this.props} name="signInForm" component={SignInForm} title="Login" schema="default" />
        <Route {...this.props} name="signUpForm" component={SignUpForm} title="Cadastre-se" schema="default" />
        <Route {...this.props} name="requestPassword" component={RequestPassword} title="Esqueceu, né?" schema="default" />
        <Route {...this.props} name="resetPassword" component={ResetPassword} title="Confira seu email" schema="default" />
        <Route {...this.props} name="signInFailed" component={SignInFailed} title="Tem Açúcar" schema="default" />
      </Router>
    )
  }
}
