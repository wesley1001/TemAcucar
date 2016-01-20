import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authFetchUser, authSignIn } from '../actions'

import StyleSheets from "../styles/StyleSheets"
import FetchingUser from "../components/FetchingUser"
import SigningIn from "../components/SigningIn"
import SignedOut from "../components/SignedOut"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, auth: { user } } = this.props
    dispatch(authFetchUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn, fetchingUser } = auth
    if (user && !credentials && !signingIn && !fetchingUser) {
      dispatch(authSignIn(user))
    }
  }

  handleLoginSubmit(user) {
    const { dispatch } = this.props
    dispatch(authSignIn(user))
  }

  render() {
    const { dispatch, auth } = this.props
    const { fetchingUser, signingIn, credentials } = auth
    if (fetchingUser)
      return (<FetchingUser />)
    if (signingIn)
      return (<SigningIn />)
    if (!credentials)
      return (<SignedOut onLoginSubmit={this.handleLoginSubmit.bind(this)} />)
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.label}>ABC</Text>
      </View>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(TemAcucar)
