import React, {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../Colors"

export default UserMenu = ({ onSignOut }) => (
  <View style={{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: Colors.darkGray,
    paddingTop: (Platform.OS == 'ios' ? 20 : 0),
  }}>
    <TouchableOpacity style={{ alignSelf: 'stretch' }} onPress={onSignOut}>
      <Text style={{
        alignSelf: 'stretch',
        textAlign: 'right',
        color: Colors.lightGray,
        margin: 10,
      }}>
        <Icon name="sign-out" />
        { ' Sair' }
      </Text>
    </TouchableOpacity>
  </View>
)
