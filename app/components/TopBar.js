import React, { Platform, View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import Icon from "./Icon"

export default TopBar = ({ onMenuOpen }) => (
  <View style={{
    marginTop: (Platform.OS == 'ios' ? 20 : 0),
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }}>
    <View style={{
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {true == true && <Image source={require('../img/icon.png')} style={{
        marginTop: -2,
        width: 25,
        height: 25,
      }} />}
    </View>
    <TouchableOpacity onPress={onMenuOpen} style={{
      paddingHorizontal: 10,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      justifyContent: 'center',
    }}>
      <Icon name="menu" style={{
        color: Colors.yellow,
        fontSize: 28,
      }} />
    </TouchableOpacity>
  </View>
)
