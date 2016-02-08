import React, {
  Component,
  Navigator,
} from 'react-native'
import { connect } from 'react-redux'
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

export default class SignedOut extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.signInFailed(nextProps)) {
      Actions.signInFailed()
    }
  }

  signInFailed(props) {
    const { signInError, facebookError } = props.auth
    return (signInError || facebookError)
  }

  render() {
    const signInFailed = this.signInFailed(this.props)
    return (
      <StyledRouter>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route {...this.props} name="welcome" component={Welcome} title="Tem Açúcar?" schema="default" initial={!signInFailed} hideNavBar={true} />
        <Route {...this.props} name="signInFailed" component={SignInFailed} title="Tem Açúcar" type="reset" initial={signInFailed} hideNavBar={true} />
        <Route {...this.props} name="signIn" component={SignIn} title="Login" schema="default" />
        <Route {...this.props} name="signUp" component={SignUp} title="Cadastre-se" schema="default" />
        <Route {...this.props} name="signInForm" component={SignInForm} title="Login" schema="default" />
        <Route {...this.props} name="signUpForm" component={SignUpForm} title="Cadastre-se" schema="default" />
        <Route {...this.props} name="requestPassword" component={RequestPassword} title="Criar nova senha" schema="default" />
        <Route {...this.props} name="resetPassword" component={ResetPassword} title="Confira seu email" schema="default" />
      </StyledRouter>
    )
  }
}
