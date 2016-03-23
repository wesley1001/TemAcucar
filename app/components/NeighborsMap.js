import React, { View } from 'react-native'
import MapView from 'react-native-maps'
import Colors from "../Colors"

export default NeighborsMap = ({ neighbors: { loading, users }, auth: { currentUser: { latitude, longitude } }}) => (
  <View>
    <View style={{
      backgroundColor: Colors.beige,
      height: 150,
    }}>
      <MapView
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
      backgroundColor: Colors.lightPink,
      paddingVertical: 8,
    }}>
      <Sentence style={{
        color: Colors.white, 
        fontFamily: 'OpenSans-Bold', 
        textAlign: 'center',
        fontSize: 12,
      }}>
        { loading ? "Carregando vizinhança..." : `${users.length} pessoas em sua vizinhança` }
      </Sentence>
    </View>
  </View>
)
