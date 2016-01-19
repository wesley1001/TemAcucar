import React, { Component, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions'

import StyleSheets from "../stylesheets/StyleSheets"

class TemAcucar extends Component {
  componentDidMount() {
    const { dispatch, currentUser } = this.props
    dispatch(fetchCurrentUser())
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
}))(TemAcucar)
