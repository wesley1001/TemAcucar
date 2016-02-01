import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { authGetUser, authSignIn, authSignUp, authSignOut, authFacebook, authRequestPassword, authResetPassword } from '../actions/AuthActions'
import { termsAccept, termsReject, termsCancelReject, termsScrollToBottom } from '../actions/TermsActions'

import Loading from "../components/Loading"
import SignInFailed from "../components/SignInFailed"
import SignedOut from "../components/SignedOut"
import ResetPassword from "../components/ResetPassword"
import Configurator from "./Configurator"

class Authorizer extends Component {
  componentDidMount() {
    const { dispatch, auth: { currentUser } } = this.props
    dispatch(authGetUser(currentUser))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { currentUser, credentials, signingIn, signingUp, signingOut, gettingUser, signInError, signUpError, requestingPassword, resetingPassword, resetPassword } = auth
    if (currentUser && !credentials && !signingIn && !signingUp && !signingOut && !gettingUser && !signInError && !signUpError && !requestingPassword && !resetingPassword && !resetPassword) {
      dispatch(authSignIn(currentUser))
    }
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
    const { auth, terms } = this.props
    const { currentUser, startingUp, gettingUser, signingIn, signingUp, signingOut, credentials, signInError, signUpError, resetPassword } = auth
    const { acceptingTerms, rejectedTerms } = terms
    const authEvents = {
      onSignIn: this.handleSignIn.bind(this),
      onSignUp: this.handleSignUp.bind(this),
      onSignOut: this.handleSignOut.bind(this),
      onFacebook: this.handleFacebook.bind(this),
      onRequestPassword: this.handleRequestPassword.bind(this),
      onResetPassword: this.handleResetPassword.bind(this),
    }
    if (startingUp || gettingUser || signingIn || signingOut || acceptingTerms)
      return (<Loading />)
    if (signInError)
      return (<SignInFailed auth={auth} {...authEvents} />)
    if (resetPassword)
      return (<ResetPassword auth={auth} {...authEvents} />)
    if (!credentials)
      return (<SignedOut auth={auth} {...authEvents} />)
    return (<Configurator auth={auth} {...authEvents} currentUser={currentUser} />)
  }
}

export default connect(state => ({
  auth: state.auth,
  terms: state.terms,
}))(Authorizer)
