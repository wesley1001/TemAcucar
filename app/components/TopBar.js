import React, {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default TopBar = ({ onMenuOpen }) => (
  <View style={{
    marginTop: (Platform.OS == 'ios' ? 20 : 0),
    height: 34,
    backgroundColor: Colors.brown,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  }}>
    <TouchableOpacity onPress={onMenuOpen} style={{
      flex: 0.10,
      padding: 10,
    }}>
      <Icon name="menu" style={{
        color: Colors.white,
        fontSize: 28,
      }} />
    </TouchableOpacity>
    <View style={{
      flex: 0.90, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {true == false && <Image source={require('../img/icon.png')} style={{marginRight: 60}} />}
    </View>
  </View>
)
