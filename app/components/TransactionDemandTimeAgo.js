import React, { View } from 'react-native'
import Colors from "../Colors"
import Icon from "./Icon"
import TimeAgo from "./TimeAgo"

export default TransactionDemandTimeAgo = ({ index, demand: { created_at }}) => (
  <View style={{
    flexDirection: 'column',
    flex: 1,
    alignItems: (index % 2 == 0 ? 'flex-end' : 'flex-start'),
  }}>
    <Icon name="schedule" style={{ 
      color: (index % 2 == 0 ? Colors.lightPink : Colors.lightBlue),
      fontSize: 14,
    }} />
    <TimeAgo time={created_at} style={{color: (index % 2 == 0 ? Colors.lightPink : Colors.lightBlue)}} />
  </View>
)
