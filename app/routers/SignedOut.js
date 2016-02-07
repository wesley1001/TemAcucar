import React, {
  Component,
  Navigator,
} from 'react-native'
import { connect } from 'react-redux'
import { Route, Schema, Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import StyledRouter from "../components/StyledRouter"
import Welcome from "../screens/Welcome"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import SignInForm from "../screens/SignInForm"
import SignUpForm from "../screens/SignUpForm"
import SignInFailed from "../screens/SignInFailed"
import RequestPassword from "../screens/RequestPassword"
import ResetPassword from "../screens/ResetPassword"

class SignedOut extends Component {
  componentWillReceiveProps(nextProps) {
    const { signInError, facebookError } = nextProps.auth
    const signInFailed = (signInError || facebookError)
    if (signInFailed)
      Actions.signInFailed()
  }

  render() {
    const { signInError, facebookError } = this.props.auth
    const signInFailed = (signInError || facebookError)
    return (
      <StyledRouter>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route {...this.props} name="welcome" component={Welcome} title="Tem Açúcar?" schema="default" initial={!signInFailed} />
        <Route {...this.props} name="signInFailed" component={SignInFailed} title="Tem Açúcar" type="reset" initial={signInFailed} />
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

export default connect(state => ({
  auth: state.auth,
}))(SignedOut)
