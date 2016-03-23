import React, { View, Text } from 'react-native'
import Colors from "../Colors"
import UserImage from "./UserImage"
import TimeAgo from "./TimeAgo"

export default DemandHeader = ({ demand: { user, name, distance, created_at }}) => (
  <View style={{
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <UserImage source={{uri: user.image_url}} style={{marginBottom: 6}} />
    <Text style={{
      textAlign: 'center',
      color: Colors.brown,
      fontSize: 10,
      fontFamily: 'OpenSans-Bold',
    }}>
      {user.first_name} precisa de um(a)
    </Text>
    <Text style={{
      textAlign: 'center',
      color: Colors.pink,
      fontSize: 12,
      fontFamily: 'OpenSans-Bold',
    }}>
      { name.toUpperCase() }
    </Text>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
    }}>
      <Icon name="access-time" style={{ 
        color: Colors.ice,
        marginRight: 4,
        marginTop: 2,
        fontSize: 14,
      }} />
      <TimeAgo time={created_at} />
      <Icon name="place" style={{ 
        color: Colors.ice,
        marginLeft: 10,
        marginRight: 2,
        marginTop: 2,
        fontSize: 14,
      }} />
      <Text style={{
        color: Colors.brown,
        fontSize: 10,
        fontFamily: 'OpenSans',
      }}>
        A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
      </Text>
    </View>
  </View>
)
