import React, { View, Dimensions } from 'react-native'
import moment from 'moment'
import Colors from "../Colors"
import Sentence from "../components/Sentence"
import TimeAgo from "../components/TimeAgo"

export default Message = ({ message: { created_at, text }, fromCurrentUser, date }) => (
  <View style={{
  }}>
    { date && <View style={{
        marginBottom: 10,
        alignItems: 'center',
      }}>
        <Sentence style={{
          fontSize: 12,
        }}>
          {date}
        </Sentence>
      </View>
    }
    <View style={{
      backgroundColor: (fromCurrentUser ? Colors.pink : Colors.blue),
      padding: 10,
      borderRadius: 4,
      marginBottom: 10,
      width: (Dimensions.get('window').width * 0.75),
      alignSelf: (fromCurrentUser ? 'flex-end' : 'flex-start'),
    }}>
      <Sentence style={{
        color: Colors.white,
        fontSize: 12,
      }}>
        {text}
      </Sentence>
      <Sentence style={{
        fontSize: 10,
        color: (fromCurrentUser ? Colors.lightPink : Colors.lightBlue),
        alignSelf: 'flex-end',
      }}>
        {moment(created_at).format('HH:mm')}
      </Sentence>
    </View>
  </View>
)
