import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrentUser, login } from '../actions'

import StyleSheets from "../styles/StyleSheets"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, currentUser } = this.props
    if (!currentUser) {
      dispatch(fetchCurrentUser())
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, currentUser, credentials } = nextProps
    if (credentials) {
      // TODO proceed with logged user
      console.log('aki! logado!')
    } else if (currentUser) {
      dispatch(login(currentUser))
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
  currentUser: state.currentUser,
  credentials: state.credentials,
}))(TemAcucar)
