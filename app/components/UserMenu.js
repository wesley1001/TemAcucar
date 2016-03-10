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
    backgroundColor: Colors.yellow,
    paddingTop: (Platform.OS == 'ios' ? 20 : 0),
  }}>
    <View style={{
      backgroundColor: Colors.beige,
      alignSelf: 'stretch',
      padding: 20,
    }}>
      <Sentence style={{ 
        fontFamily: 'Montserrat-Bold', 
        color: Colors.pink
      }}>
        { auth.currentUser.first_name } { auth.currentUser.last_name }
      </Sentence>
    </View>
    <TouchableOpacity style={{ alignSelf: 'stretch', padding: 20, flexDirection: 'row', alignItems: 'center' }} onPress={onSignOut}>
      <Icon name="power-settings-new" style={{ 
        fontSize: 32,
        color: Colors.ice,
        marginRight: 10,
      }} />
      <Sentence style={{
        fontSize: 24,
        color: Colors.ice,
      }}>
        Sair
      </Sentence>
    </TouchableOpacity>
  </View>
)
