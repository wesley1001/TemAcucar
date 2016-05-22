import React, { View, Image, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import Colors from "../Colors"

export default NeighborsMap = ({ url, count }) => (
  <View>
    <Image source={{uri: url}} style={{
      height: Dimensions.get('window').width * (240/600),
      width: Dimensions.get('window').width,
    }}/>
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
          { `${count} ${count === 1 ? 'vizinho' : 'vizinhos'}` }
        </Sentence>
      </View>
    </View>
  </View>
)
