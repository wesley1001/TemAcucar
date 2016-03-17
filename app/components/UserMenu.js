import React, {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"
import Sentence from "./Sentence"

export default UserMenu = ({ auth, onSignOut }) => (
  <View style={{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: Colors.lightPink,
  }}>
    <View style={{
      backgroundColor: Colors.pink,
      alignSelf: 'stretch',
      padding: 20,
      paddingTop: (Platform.OS == 'ios' ? 40 : 20),
    }}>
      <Sentence style={{ 
        fontFamily: 'Montserrat-Bold', 
        color: Colors.white
      }}>
        { auth.currentUser.first_name } { auth.currentUser.last_name }
      </Sentence>
    </View>
    <TouchableOpacity style={{ alignSelf: 'stretch', padding: 20, flexDirection: 'row', alignItems: 'center' }} onPress={onSignOut}>
      <Icon name="power-settings-new" style={{ 
        fontSize: 32,
        color: Colors.white,
        marginRight: 10,
      }} />
      <Sentence style={{
        fontSize: 24,
        color: Colors.white,
      }}>
        Sair
      </Sentence>
    </TouchableOpacity>
  </View>
)
