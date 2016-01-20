import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authFetchUser, authSignIn } from '../actions'

import StyleSheets from "../styles/StyleSheets"
import FetchingUser from "../components/FetchingUser"
import SigningIn from "../components/SigningIn"
import SignInFailed from "../components/SignInFailed"
import SignedOut from "../components/SignedOut"
import Neighborhood from "../components/Neighborhood"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, auth: { user } } = this.props
    dispatch(authFetchUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn, fetchingUser, error } = auth
    if (user && !credentials && !signingIn && !fetchingUser && !error) {
      dispatch(authSignIn(user))
    }
  }

  handleSignInSubmit(user) {
    const { dispatch } = this.props
    dispatch(authSignIn(user))
  }

  render() {
    const { dispatch, auth } = this.props
    const { user, fetchingUser, signingIn, credentials, error } = auth
    if (fetchingUser)
      return (<FetchingUser />)
    if (signingIn)
      return (<SigningIn />)
    if (error)
      return (<SignInFailed onSignInSubmit={this.handleSignInSubmit.bind(this)} />)
    if (!credentials)
      return (<SignedOut onSignInSubmit={this.handleSignInSubmit.bind(this)} />)
    return (<Neighborhood user={user} />)
  }
}

export default connect(state => ({
  auth: state.auth,
}))(TemAcucar)
