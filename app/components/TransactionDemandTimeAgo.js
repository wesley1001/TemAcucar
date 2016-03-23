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
      color: Colors.white,
      fontSize: 14,
    }} />
    <TimeAgo time={created_at} style={{fontSize: 9, color: Colors.white}} />
  </View>
)
