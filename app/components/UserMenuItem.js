import React, { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default UserMenuItem = ({ onPress, icon, children, type }) => (
  <TouchableOpacity onPress={onPress} style={{
    alignSelf: 'stretch',
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center'
  }}>
    <Icon name={icon} style={{ 
      fontSize: 24,
      color: (type == "light" ? Colors.pink : Colors.white),
      marginRight: 10,
    }} />
    <Sentence style={{
      fontSize: 16,
      color: (type == "light" ? Colors.pink : Colors.white),
    }}>
      {children}
    </Sentence>
  </TouchableOpacity>
)
