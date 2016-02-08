import React, {
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
    paddingTop: 20,
  }}>
    <TouchableOpacity style={{ alignSelf: 'stretch' }} onPress={onSignOut}>
      <Text style={{
        alignSelf: 'stretch',
        textAlign: 'right',
        color: Colors.lightGray,
        padding: 10,
      }}>
        <Icon name="sign-out" />
        { ' Sair' }
      </Text>
    </TouchableOpacity>
  </View>
)
