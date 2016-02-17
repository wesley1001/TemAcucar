import React, {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
        textAlign: 'left',
        color: Colors.lightGray,
        margin: 10,
      }}>
        <Icon name="power-settings-new" />
        { ' Sair' }
      </Text>
    </TouchableOpacity>
  </View>
)
