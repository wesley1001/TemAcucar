import React, { View } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserImage from "./UserImage"
import TimeAgo from "./TimeAgo"

export default TransactionDemand = ({ demand: { user, state, name, created_at }, auth: { currentUser }}) => (
  <View style={{
    margin: 10,
    marginBottom: 0,
  }}>
    <View style={{
      backgroundColor: Colors.blue,
      padding: 10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      flexDirection: 'row',
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
          fontFamily: 'Montserrat-Bold',
          fontSize: 12,
          color: Colors.white,
        }}>
          {name}
        </Sentence>
      </View>
      <View style={{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-end',
      }}>
        <Icon name="schedule" style={{ 
          color: Colors.white,
          fontSize: 14,
        }} />
        <TimeAgo time={created_at} style={{color: Colors.white}} />
      </View>
    </View>
    <View style={{
      backgroundColor: Colors.beige,
      padding: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }}>
      <View style={{
        backgroundColor: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.ice)),
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Icon name={(state === 'completed' ? 'check-circle' : (state === 'canceled' ? 'cancel' : 'schedule'))} style={{ 
          color: Colors.white,
          fontSize: 14,
          marginRight: 6,
        }} />
        <Sentence style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 10,
          lineHeight: 10,
          color: Colors.white,
        }}>
          Pedido {(state === 'completed' ? 'bem-sucedido' : (state === 'canceled' ? 'cancelado' : 'em andamento'))}
        </Sentence>
      </View>
    </View>
  </View>
)
