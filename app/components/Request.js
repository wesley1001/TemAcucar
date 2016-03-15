import React, { View, Text, Image } from 'react-native'
import Colors from "../Colors"
import Button from "./Button"

export default Request = ({ children }) => (
  <View style={{
    marginTop: 12,
  }}>
    <View style={{
      backgroundColor: Colors.white,
      paddingTop: 25,
      paddingBottom: 10,
      marginTop: 16,
      marginHorizontal: 10,
      borderColor: Colors.white,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    }}>
      <Text style={{
        textAlign: 'center',
        color: Colors.brown,
        fontSize: 12,
        fontFamily: 'OpenSans-Bold',
      }}>
        { 'Bicicleta ergométrica'.toUpperCase() }
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
        <Text style={{
          color: Colors.brown,
          fontSize: 10,
          fontFamily: 'OpenSans',
        }}>
          Hoje
        </Text>
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
          A 3km
        </Text>
      </View>
    </View>
    <View style={{
      flexDirection: 'row',
      marginHorizontal: 10,
    }}>
      <Button
        style={{
          flex: 1,
          paddingVertical: 18,
        }}
        textStyle={{
          fontSize: 12,
        }}
      >
        Emprestar
      </Button>
      <Button
        style={{
          flex: 1,
          backgroundColor: Colors.blue,
          borderColor: Colors.darkBlue,
          paddingVertical: 18,
        }}
        textStyle={{
          fontSize: 12,
        }}
      >
        Não tenho
      </Button>
      <Button
        style={{
          flex: 1,
          backgroundColor: Colors.ice,
          borderColor: Colors.darkIce,
          paddingVertical: 18,
        }}
        textStyle={{
          fontSize: 12,
        }}
      >
        Reportar
      </Button>
    </View>
    <View style={{
      backgroundColor: Colors.ice,
      position: 'absolute',
      top: 6,
      left: 60,
      right: 60,
      paddingVertical: 3,
    }}>
      <Text style={{
        textAlign: 'center',
        color: Colors.white,
        fontSize: 12,
        fontFamily: 'OpenSans-Bold',
      }}>
        Daniel precisa de um(a)
      </Text>
    </View>
    <Image source={require('../img/dw.jpg')} style={{
      width: 36,
      height: 36,
      borderRadius: 18,
      position: 'absolute',
      top: 0,
      left: 50,
    }} />
  </View>
)
