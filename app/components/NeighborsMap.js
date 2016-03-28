import React, { View } from 'react-native'
import MapView from 'react-native-maps'
import Colors from "../Colors"

export default NeighborsMap = ({ latitude, longitude, users }) => (
  <View>
    <View style={{
      backgroundColor: Colors.beige,
      height: 150,
    }}>
      <MapView
        showsUserLocation={false}
        style={{
          height: 150,
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        { users.map(user => (
          <MapView.Marker 
            key={user.id}
            coordinate={{
              latitude: user.latitude,
              longitude: user.longitude
            }}
            image={require('../img/marker.png')}
          />
        )) }
      </MapView>
    </View>
    <View style={{
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: Colors.lightPink,
        paddingVertical: 4,
        paddingHorizontal: 30,
        borderRadius: 12,
      }}>
        <Sentence style={{
          color: Colors.white, 
          fontFamily: 'OpenSans-Bold', 
          textAlign: 'center',
          fontSize: 12,
        }}>
          { `${users.length} vizinhos` }
        </Sentence>
      </View>
    </View>
  </View>
)
