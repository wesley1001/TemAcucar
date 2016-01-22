import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authGetUser, authSignIn, authSignOut, authFacebook } from '../actions'

import StyleSheets from "../styles/StyleSheets"
import Loading from "../components/Loading"
import SignInFailed from "../components/SignInFailed"
import SignedOut from "../components/SignedOut"
import Neighborhood from "../components/Neighborhood"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, auth: { user } } = this.props
    dispatch(authGetUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn, signingOut, gettingUser, signInError, signOutError } = auth
    if (user && !credentials && !signingIn && !signingOut && !gettingUser && !signInError && !signOutError) {
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

  handleSignOut() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(authSignOut(credentials))
  }

  render() {
    const { dispatch, auth } = this.props
    const { user, gettingUser, signingIn, signingOut, credentials, signInError } = auth
    if (gettingUser || signingIn || signingOut)
      return (<Loading />)
    if (signInError)
      return (<SignInFailed onSignIn={this.handleSignIn.bind(this)} onFacebook={this.handleFacebook.bind(this)} />)
    if (!credentials)
      return (<SignedOut onSignIn={this.handleSignIn.bind(this)} onFacebook={this.handleFacebook.bind(this)} />)
    return (<Neighborhood user={user} onSignOut={this.handleSignOut.bind(this)} />)
  }
}

export default connect(state => ({
  auth: state.auth,
}))(TemAcucar)
