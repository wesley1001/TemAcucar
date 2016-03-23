import React, { View } from 'react-native'
import truncate from 'truncate'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserImage from "./UserImage"

export default TransactionDemandDescription = ({ index, demand: { user, name }, auth: { currentUser }}) => (
  <View style={{
    flexDirection: 'row',
    alignItems: 'center',
  }}>
    { index % 2 == 0 && <UserImage source={{uri: user.image_url}} style={{marginRight: 6}} /> }
    <View style={{
      flexDirection: 'column',
      flex: 2,
      alignItems: (index % 2 == 0 ? 'flex-start' : 'flex-end'),
    }}>
      <Sentence style={{
        color: Colors.white,
        fontSize: 10,
      }}>
        {currentUser.id === user.id ? 'Você' : user.first_name} pediu um(a)
      </Sentence>
      <Sentence style={{
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        color: Colors.white,
      }}>
        {truncate(name, 30)}
      </Sentence>
    </View>
    { index % 2 != 0 && <UserImage source={{uri: user.image_url}} style={{marginLeft: 6}} /> }
  </View>
)
