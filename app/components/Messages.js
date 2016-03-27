import React, { Component, View } from 'react-native'
import moment from 'moment'
import GiftedSpinner from 'react-native-gifted-spinner'
import LoadMore from "../components/LoadMore"
import Message from "../components/Message"

export default class Messages extends Component {
  render() {
    const { onLoadMore, auth, messages: { messages, loading, creating, canLoadMore } } = this.props
    const { currentUser } = auth
    let lastDate = null
    let date = null
    return (
      <View>
        { canLoadMore && !loading &&
          <LoadMore onPress={onLoadMore} />
        }
        { loading && <GiftedSpinner style={{ marginTop: 10, marginBottom: 20 }} /> }
        { messages.map((message) => {
          const compareDate = moment(message.created_at).format("DD/MM/YYYY")
          date = null
          if (compareDate !== lastDate) {
            lastDate = compareDate
            const today = moment().format("DD/MM/YYYY")
            const yesterday = moment().subtract(1, 'days').format("DD/MM/YYYY")
            if (compareDate === today) {
              date = 'HOJE'
            } else if (compareDate === yesterday) {
              date = 'ONTEM'
            } else {
              date = compareDate
            }
          }
          return (<Message {...this.props} key={message.id} message={message} fromCurrentUser={currentUser.id === message.user.id} date={date} />)
        }) }
        { creating && <GiftedSpinner style={{ marginBottom: 10 }} /> }
      </View>
    )
  }
}
