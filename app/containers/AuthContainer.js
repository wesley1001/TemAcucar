import React, { Component, Platform } from 'react-native'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/AuthActions'
import * as StoredAuthActions from '../actions/StoredAuthActions'
import * as GcmActions from '../actions/GcmActions'

import Loading from "../screens/Loading"
import AuthRouter from "../routers/AuthRouter"
import ConfigContainer from "./ConfigContainer"

class AuthContainer extends Component {
  componentDidMount() {
    const { dispatch, auth: { currentUser } } = this.props
    dispatch(StoredAuthActions.get(currentUser))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth: { credentials } } = nextProps
    if (this.shouldRefreshUser(nextProps)) {
      dispatch(AuthActions.refreshUser(credentials))
    }
    // After refreshing user, checks if it needs to send new GCM token to the server
    if (Platform.OS === 'android') {
      const { gcm, auth: { currentUser, refreshedUser } } = nextProps
      const oldRefreshedUser = this.props.auth.refreshedUser
      if (refreshedUser && !oldRefreshedUser && currentUser.gcm_token !== gcm.token) {
        console.log('oldProps', this.props, 'nextProps', nextProps)
        dispatch(GcmActions.store(credentials, gcm.token))
      }
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
      // We don't have any error of the kinds that AuthRouter router will render SignInFailed
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
    const { dispatch, auth } = this.props
    const { credentials, currentUser } = auth
    dispatch(AuthActions.facebook(credentials, currentUser))
  }

  handleSignIn(currentUser) {
    const { dispatch } = this.props
    dispatch(AuthActions.signIn(currentUser))
  }

  handleSignUp(currentUser) {
    const { dispatch } = this.props
    dispatch(AuthActions.signUp(currentUser))
  }

  handleSignOut() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(AuthActions.signOut(credentials))
  }

  handleRequestPassword(currentUser) {
    const { dispatch } = this.props
    dispatch(AuthActions.requestPassword(currentUser))
  }

  handleResetPassword(data) {
    const { dispatch, auth } = this.props
    const { currentUser } = auth
    dispatch(AuthActions.resetPassword({
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
      return (<AuthRouter auth={auth} {...authEvents} />)
    return (<ConfigContainer auth={auth} {...authEvents} />)
  }
}

export default connect(state => ({
  auth: state.auth,
}))(AuthContainer)
