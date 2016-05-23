import React, { Platform, ScrollView, View } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserMenuItem from "./UserMenuItem"

export default UserMenu = ({ currentUser, onAbout, onSignOut, onUserDemands, onUserReviews, onSetLocation, onFacebook, facebookConnecting, onAdminDemands, onFlaggedDemands, signingOut }) => (
  <View style={{
    flex: 1,
    justifyContent: 'flex-start',
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
    <ScrollView style={{
      flex: 1,
    }}>
      <UserMenuItem onPress={onUserDemands} icon="view-list">
        Meus pedidos
      </UserMenuItem>
      <UserMenuItem onPress={onUserReviews} icon="star">
        Minhas avaliações
      </UserMenuItem>
      <UserMenuItem onPress={onSetLocation} icon="place">
        Alterar endereço
      </UserMenuItem>
      { !currentUser.facebook_uid && <UserMenuItem onPress={onFacebook} icon="facebook-official" iconSet="FontAwesome" iconStyle={{
        fontSize: 22,
        marginLeft: 4,
      }}>
        { facebookConnecting ? 'Conectando...' : 'Conectar Facebook' }
      </UserMenuItem> }
      { currentUser.admin && <UserMenuItem onPress={onAdminDemands} icon="playlist-add-check">
        Todos os pedidos
      </UserMenuItem> }
      { currentUser.admin && <UserMenuItem onPress={onFlaggedDemands} icon="report">
        Pedidos impróprios
      </UserMenuItem> }
      <UserMenuItem onPress={onAbout} icon="perm-device-information">
        Sobre
      </UserMenuItem>
      <View style={{
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderTopWidth: 0.3,
        borderColor: Colors.pink,
        alignSelf: 'stretch',
      }} />
      <UserMenuItem onPress={onSignOut} icon="power-settings-new" type="light" style={{
        paddingBottom: 20,
      }}>
        { signingOut ? 'Saindo...' : 'Sair' }
      </UserMenuItem>
    </ScrollView>
  </View>
)
