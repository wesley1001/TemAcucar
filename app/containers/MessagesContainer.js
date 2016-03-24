import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as MessagesActions from '../actions/MessagesActions'

import Messages from "../components/Messages"

class MessagesContainer extends Component {
  componentWillMount() {
    const { dispatch, auth, transaction } = this.props
    const { credentials, currentUser } = auth
    dispatch(MessagesActions.list(credentials, currentUser, transaction))
  }

  handleList() {
    const { dispatch, auth, messages, transaction } = this.props
    const { credentials, currentUser } = auth
    const { offset } = messages
    dispatch(MessagesActions.list(credentials, currentUser, transaction, offset))
  }

  render() {
    return (
      <Messages
        {...this.props}
        onLoadMore={this.handleList.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  messages: state.messages,
}))(MessagesContainer)
