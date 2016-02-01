import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { authGetUser, authSignIn, authSignUp, authSignOut, authFacebook, authRequestPassword, authResetPassword } from '../actions/AuthActions'
import { termsAccept, termsReject, termsCancelReject, termsScrollToBottom } from '../actions/TermsActions'

import Loading from "../components/Loading"
import SignInFailed from "../components/SignInFailed"
import SignedOut from "../components/SignedOut"
import ResetPassword from "../components/ResetPassword"
import RejectedTerms from "../components/RejectedTerms"
import Terms from "../components/Terms"
import Neighborhood from "../components/Neighborhood"

class Authorizator extends Component {
  componentDidMount() {
    const { dispatch, auth: { user } } = this.props
    dispatch(authGetUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn, signingUp, signingOut, gettingUser, signInError, signUpError, requestingPassword, resetingPassword, resetPassword } = auth
    if (user && !credentials && !signingIn && !signingUp && !signingOut && !gettingUser && !signInError && !signUpError && !requestingPassword && !resetingPassword && !resetPassword) {
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

  handleAcceptTerms() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(termsAccept(credentials))
  }

  handleRejectTerms() {
    const { dispatch } = this.props
    dispatch(termsReject())
  }

  handleCancelRejectTerms() {
    const { dispatch } = this.props
    dispatch(termsCancelReject())
  }

  handleScrollToBottomTerms() {
    const { dispatch } = this.props
    dispatch(termsScrollToBottom())
  }

  render() {
    const { dispatch, auth, terms } = this.props
    const { user, startingUp, gettingUser, signingIn, signingUp, signingOut, credentials, signInError, signUpError, resetPassword } = auth
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
    if (rejectedTerms)
      return (<RejectedTerms onCancelRejectTerms={this.handleCancelRejectTerms.bind(this)} />)
    if (!user.accepted_terms)
      return (<Terms user={user} onAcceptTerms={this.handleAcceptTerms.bind(this)} onRejectTerms={this.handleRejectTerms.bind(this)} onScrollToBottom={this.handleScrollToBottomTerms.bind(this)} />)
    return (<Neighborhood auth={auth} {...authEvents} user={user} />)
  }
}

export default connect(state => ({
  auth: state.auth,
  terms: state.terms,
}))(Authorizator)
