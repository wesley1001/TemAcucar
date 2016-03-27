import React, {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"
import Sentence from "./Sentence"

export default UserMenu = ({ auth: { currentUser }, onSignOut }) => (
  <View style={{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: Colors.darkPink,
  }}>
    <View style={{
      backgroundColor: Colors.pink,
      alignSelf: 'stretch',
      padding: 10,
      paddingTop: (Platform.OS == 'ios' ? 30 : 10),
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <UserImage source={{uri: currentUser.image_url}} style={{marginRight: 10}} />
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}>
        <Sentence style={{ 
          fontFamily: 'BoosterNextFY-Black', 
          color: Colors.yellow,
          fontSize: 20,
          lineHeight: 28,
        }}>
          { currentUser.first_name } { currentUser.last_name }
        </Sentence>
      </View>
    </View>
    <TouchableOpacity onPress={onSignOut} style={{
      alignSelf: 'stretch',
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Icon name="power-settings-new" style={{ 
        fontSize: 24,
        color: Colors.white,
        marginRight: 10,
      }} />
      <Sentence style={{
        fontSize: 16,
        color: Colors.white,
      }}>
        Sair
      </Sentence>
    </TouchableOpacity>
  </View>
)
