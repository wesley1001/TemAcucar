import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { authGetStoredAuth, authRefreshUser, authSignIn, authSignUp, authSignOut, authFacebook, authRequestPassword, authResetPassword } from '../actions/AuthActions'

import Loading from "../screens/Loading"
import SignedOut from "../routers/SignedOut"
import Configurator from "./Configurator"

class Authorizer extends Component {
  componentDidMount() {
    const { dispatch, auth: { currentUser } } = this.props
    dispatch(authGetStoredAuth(currentUser))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth: { credentials } } = nextProps
    if (this.shouldRefreshUser(nextProps)) {
      dispatch(authRefreshUser(credentials))
    }
  }

  shouldRefreshUser(props) {
    const { currentUser, credentials, refreshedUser } = props.auth
    return (
      // We have user info but it might be out of date, and we're not in the middle of other auth async actions
      currentUser && credentials && !refreshedUser && this.isIdle(props)
    )
  }

  isIdle(props) {
    const { signingIn, signingUp, signingOut, gettingStoredAuth } = props.auth
    const { facebookSigningIn, facebookError, signInError, signUpError } = props.auth
    const { requestingPassword, resetingPassword, resetPassword } = props.auth
    const { requestPasswordError, resetPasswordError, refreshingUser, refreshUserError } = props.auth
    return (
      // We're not getting user info
      !gettingStoredAuth && 
      // We're not in the middle of any kind of sign in/up/out
      !facebookSigningIn && !signingIn && !signingUp && !signingOut && 
      // We're not in the middle of reset password flow
      !requestingPassword && !resetingPassword && !resetPassword &&
      // We don't have any error of the kinds that SignedOut router will render SignInFailed
      !facebookError && !signInError && 
      // We don't have a sign up error, so SignUpForm can manage errors by itself
      !signUpError && 
      // We don't have a request/reset password errors, so RequestPassword and ResetPassword can manage errors by themselves
      !requestPasswordError && !resetPasswordError &&
      // We're not in the middle of refreshing user
      !refreshingUser && !refreshUserError
    )
  }

  isLoading() {
    const { startingUp, gettingStoredAuth, signingIn, facebookSigningIn, signingOut } = this.props.auth
    return (startingUp || gettingStoredAuth || signingIn|| facebookSigningIn || signingOut)
  }

  isSignedOut() {
    const { credentials } = this.props.auth
    return (!credentials)
  }

  handleFacebook() {
    const { dispatch } = this.props
    dispatch(authFacebook())
  }

  handleSignIn(currentUser) {
    const { dispatch } = this.props
    dispatch(authSignIn(currentUser))
  }

  handleSignUp(currentUser) {
    const { dispatch } = this.props
    dispatch(authSignUp(currentUser))
  }

  handleSignOut() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(authSignOut(credentials))
  }

  handleRequestPassword(currentUser) {
    const { dispatch } = this.props
    dispatch(authRequestPassword(currentUser))
  }

  handleResetPassword(data) {
    const { dispatch, auth } = this.props
    const { currentUser } = auth
    dispatch(authResetPassword({
      ...currentUser,
      ...data,
    }))
  }

  render() {
    const { auth } = this.props
    const authEvents = {
      onSignIn: this.handleSignIn.bind(this),
      onSignUp: this.handleSignUp.bind(this),
      onSignOut: this.handleSignOut.bind(this),
      onFacebook: this.handleFacebook.bind(this),
      onRequestPassword: this.handleRequestPassword.bind(this),
      onResetPassword: this.handleResetPassword.bind(this),
    }
    if (this.isLoading())
      return (<Loading />)
    if (this.isSignedOut())
      return (<SignedOut auth={auth} {...authEvents} />)
    return (<Configurator auth={auth} {...authEvents} />)
  }
}

export default connect(state => ({
  auth: state.auth,
}))(Authorizer)
