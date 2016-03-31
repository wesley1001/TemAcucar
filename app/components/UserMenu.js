import React, { Platform, View } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserMenuItem from "./UserMenuItem"

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
    <UserMenuItem onPress={onSignOut} icon="list">
      Meus pedidos
    </UserMenuItem>
    <UserMenuItem onPress={onSignOut} icon="power-settings-new">
      Sair
    </UserMenuItem>
  </View>
)
