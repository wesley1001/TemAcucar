import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authGetUser, authSignIn, authSignUp, authSignOut, authFacebook, authRequestPassword, authResetPassword } from '../actions'

import StyleSheets from "../styles/StyleSheets"
import Loading from "../components/Loading"
import SignInFailed from "../components/SignInFailed"
import SignedOut from "../components/SignedOut"
import ResetPassword from "../components/ResetPassword"
import Neighborhood from "../components/Neighborhood"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, auth: { user } } = this.props
    dispatch(authGetUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn, signingUp, signingOut, gettingUser, signInError, requestingPassword, resetingPassword, resetPassword } = auth
    if (user && !credentials && !signingIn && !signingUp && !signingOut && !gettingUser && !signInError && !requestingPassword && !resetingPassword && !resetPassword) {
      dispatch(authSignIn(user))
    }
  }

  handleFacebook() {
    const { dispatch } = this.props
    dispatch(authFacebook())
  }

  handleSignIn(user) {
    const { dispatch } = this.props
    dispatch(authSignIn(user))
  }

  handleSignUp(user) {
    const { dispatch } = this.props
    dispatch(authSignUp(user))
  }

  handleSignOut() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(authSignOut(credentials))
  }

  handleRequestPassword(user) {
    const { dispatch } = this.props
    dispatch(authRequestPassword(user))
  }

  handleResetPassword(data) {
    const { dispatch, auth } = this.props
    const { user } = auth
    dispatch(authResetPassword({
      ...user,
      ...data,
    }))
  }

  render() {
    const { dispatch, auth } = this.props
    const { user, startingUp, gettingUser, signingIn, signingUp, signingOut, credentials, signInError, resetPassword } = auth
    const authEvents = {
      onSignIn: this.handleSignIn.bind(this),
      onSignUp: this.handleSignUp.bind(this),
      onSignOut: this.handleSignOut.bind(this),
      onFacebook: this.handleFacebook.bind(this),
      onRequestPassword: this.handleRequestPassword.bind(this),
      onResetPassword: this.handleResetPassword.bind(this),
    }
    if (startingUp || gettingUser || signingIn || signingUp || signingOut)
      return (<Loading />)
    if (signInError)
      return (<SignInFailed auth={auth} {...authEvents} />)
    if (resetPassword)
      return (<ResetPassword auth={auth} {...authEvents} />)
    if (!credentials)
      return (<SignedOut auth={auth} {...authEvents} />)
    return (<Neighborhood auth={auth} {...authEvents} user={user} />)
  }
}

export default connect(state => ({
  auth: state.auth,
}))(TemAcucar)
