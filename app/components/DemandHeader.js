import React, { Component, View, Text, Platform } from 'react-native'
import truncate from 'truncate'

import Colors from "../Colors"
import Sentence from "./Sentence"
import UserImage from "./UserImage"
import TimeAgo from "./TimeAgo"

export default class DemandHeader extends Component {
  render() {
    const { fullHeader, currentUser, demands, hideDescription, verb } = this.props
    // This is a hack to update demand on ViewDemand
    let demand
    if (demands) {
      const viewDemand = this.props.demand
      demand = demands.filter(demand => demand.id === viewDemand.id)[0] || viewDemand
    } else {
      demand = this.props.demand
    }
    const { user, name, description, distance, created_at, state } = demand
    const verbToUse = verb || 'precisa de'
    return (
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
            <TimeAgo time={created_at} style={{
              color: Colors.ice,
            }} />
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
              color: Colors.ice,
              fontSize: 9,
              fontFamily: 'OpenSans',
            }}>
              A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
            </Text>
          </View>
        </View>
        <Text style={{
          textAlign: 'center',
          color: Colors.ice,
          fontSize: 10,
          lineHeight: (Platform.OS === 'ios' ? 12 : 14),
          fontFamily: 'BoosterNextFY-Bold',
          marginTop: 14,
        }}>
          { currentUser.id === user.id ? 'Você' : user.first_name } { verbToUse } um(a)
        </Text>
        <Text style={{
          marginHorizontal: 10,
          textAlign: 'center',
          color: Colors.pink,
          fontSize: 12,
          lineHeight: (Platform.OS === 'ios' ? 14 : 16),
          fontFamily: 'BoosterNextFY-Black',
        }}>
          { name.toUpperCase() }
        </Text>
        { !hideDescription && 
          <Sentence style={{
            fontSize: 10,
            marginHorizontal: 10,
            marginTop: 4,
            lineHeight: (Platform.OS === 'ios' ? 10 : 12),
            fontFamily: 'BoosterNextFY-Regular',
            textAlign: 'center',
          }}>
            { fullHeader ? description : truncate(description, 120) }
          </Sentence>
        }
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <UserImage source={{uri: user.image_url}} />
        </View>
      </View>
    )
  }
}
