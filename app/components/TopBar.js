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
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }}>
    <TouchableOpacity onPress={onMenuOpen} style={{
      flex: 0.10,
      padding: 10,
    }}>
      <Icon name="menu" style={{
        color: Colors.pink,
        fontSize: 28,
      }} />
    </TouchableOpacity>
    <View style={{
      flex: 0.90, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {true == true && <Image source={require('../img/icon.png')} style={{
        marginTop: -2,
        marginRight: 60,
        width: 25,
        height: 25,
      }} />}
    </View>
  </View>
)
