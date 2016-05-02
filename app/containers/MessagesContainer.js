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
    const { auth, messages } = this.props
    const { currentUser } = auth
    return (
      <Messages
        messages={messages.list}
        listing={messages.listing}
        canList={messages.canList}
        currentUser={currentUser}
        onList={this.handleList.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  messages: state.messages,
}))(MessagesContainer)
