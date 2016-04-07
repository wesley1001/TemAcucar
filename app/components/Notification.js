import React, { View } from 'react-native'
import Colors from "../Colors"
import HtmlSentence from "./HtmlSentence"
import TimeAgo from "./TimeAgo"

export default Notification = ({ notification: { read, text, triggering_user, created_at } }) => (
  <View style={{
    backgroundColor: (read ? Colors.white : Colors.beige),
    borderColor: Colors.ice,
    borderBottomWidth: 0.5,
    padding: 10,
  }}>
    <View style={{
      flexDirection: 'row',
    }}>
      { triggering_user && <UserImage source={{uri: triggering_user.image_url}} style={{marginRight: 10}} /> }
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <HtmlSentence style={{
          fontSize: 12,
        }}>
          {text}
        </HtmlSentence>
        <TimeAgo time={created_at} style={{
          color: Colors.ice,
          marginTop: 4,
        }} />
      </View>
    </View>
  </View>
)
