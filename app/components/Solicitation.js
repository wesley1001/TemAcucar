import React, { View, Text, Image } from 'react-native'
import Colors from "../Colors"
import Button from "./Button"

export default Solicitation = ({ children }) => (
  <View style={{
  }}>
    <View style={{
      backgroundColor: Colors.white,
      borderTopWidth: 4,
      borderColor: Colors.beige,
      paddingVertical: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Image source={require('../img/dw.jpg')} style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        marginBottom: 6,
      }} />
      <Text style={{
        textAlign: 'center',
        color: Colors.brown,
        fontSize: 10,
        fontFamily: 'OpenSans-Bold',
      }}>
        Daniel precisa de um(a)
      </Text>
      <Text style={{
        textAlign: 'center',
        color: Colors.pink,
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
          flex: 1.01,
          backgroundColor: Colors.ice,
          borderColor: Colors.darkIce,
          paddingVertical: 18,
        }}
        textStyle={{
          fontSize: 12,
        }}
      >
        Denunciar
      </Button>
    </View>
  </View>
)
