import React, { View, Text } from 'react-native'
import Colors from "../Colors"
import UserImage from "./UserImage"
import TimeAgo from "./TimeAgo"

export default DemandHeader = ({ demand: { user, name, distance, created_at }}) => (
  <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 9,
  }}>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: Colors.beige,
      borderRadius: 12,
      paddingVertical: 2,
    }}>
      <View style={{
        width: 90,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon name="schedule" style={{ 
          color: Colors.ice,
          marginRight: 4,
          marginTop: 2,
          fontSize: 12,
        }} />
        <TimeAgo time={created_at} />
      </View>
      <View style={{
        width: 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon name="place" style={{ 
          color: Colors.ice,
          marginLeft: 10,
          marginRight: 2,
          marginTop: 2,
          fontSize: 12,
        }} />
        <Text style={{
          color: Colors.brown,
          fontSize: 9,
          fontFamily: 'OpenSans',
        }}>
          A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
        </Text>
      </View>
    </View>
    <Text style={{
      textAlign: 'center',
      color: Colors.brown,
      fontSize: 10,
      fontFamily: 'BoosterNextFY-Regular',
      marginTop: 14,
    }}>
      {user.first_name} precisa de um(a)
    </Text>
    <Text style={{
      marginTop: 4,
      textAlign: 'center',
      color: Colors.pink,
      fontSize: 12,
      lineHeight: 12,
      fontFamily: 'BoosterNextFY-Black',
    }}>
      { name.toUpperCase() }
    </Text>
    <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <UserImage source={{uri: user.image_url}} style={{marginBottom: 6}} />
    </View>
  </View>
)
