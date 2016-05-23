import React, { View } from 'react-native'
import truncate from 'truncate'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserImage from "./UserImage"

export default TransactionDemandDescription = ({ index, demand: { user, name }, currentUser}) => (
  <View style={{
    flexDirection: 'row',
    alignItems: 'center',
  }}>
    <UserImage source={{uri: user.image_url}} style={{marginRight: 6}} />
    <View style={{
      flexDirection: 'column',
      flex: 2,
    }}>
      <Sentence style={{
        color: Colors.white,
        fontSize: 10,
      }}>
        {currentUser.id === user.id ? 'Você' : user.first_name} pediu um(a)
      </Sentence>
      <Sentence style={{
        fontFamily: 'BoosterNextFY-Black',
        fontSize: 12,
        color: Colors.white,
      }}>
        {truncate(name, 25)}
      </Sentence>
    </View>
  </View>
)
