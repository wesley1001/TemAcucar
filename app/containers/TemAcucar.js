import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authFetchUser, authSignIn } from '../actions'

import StyleSheets from "../styles/StyleSheets"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, auth: {user} } = this.props
    dispatch(authFetchUser(user))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, auth } = nextProps
    const { user, credentials, signingIn } = auth
    if (user && !credentials && !signingIn) {
      dispatch(authSignIn(user))
    }
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text>Aki</Text>
      </View>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(TemAcucar)
