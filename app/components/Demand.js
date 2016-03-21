import React, { Component, Alert, View, Text, Image } from 'react-native'
import moment from 'moment'
import Colors from "../Colors"
import Button from "./Button"

moment.locale('pt-br', {
  relativeTime : {
    future: "Em %s",
    past:   "Há %s",
    s:  "segunds",
    m:  "um minuto",
    mm: "%d minutos",
    h:  "an hora",
    hh: "%d horas",
    d:  "um dia",
    dd: "%d dias",
    M:  "um mês",
    MM: "%d meses",
    y:  "um ano",
    yy: "%d anos",
  }
})

export default class Demand extends Component {
  handleRefuse() {
    const { demand, onRefuse } = this.props
    onRefuse(demand)
  }

  handleFlag() {
    Alert.alert(
      'Pedido impróprio?',
      'Você tem certeza que quer denunciar este pedido como impróprio?',
      [{ text: 'Cancelar', style: 'cancel' }, { text: 'OK', onPress: () => {
        const { demand, onFlag } = this.props
        onFlag(demand)
      }}]
    )
  }

  render() {
    const { user, state, name, distance, created_at } = this.props.demand
    return (
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
          <Image source={{uri: user.image_url}} style={{
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
            {user.first_name} {state == 'active' ? 'precisa' : 'precisou'} de um(a)
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
            <Text style={{
              color: Colors.brown,
              fontSize: 10,
              fontFamily: 'OpenSans',
            }}>
              { moment(created_at).fromNow() }
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
              A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
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
            onPress={this.handleRefuse.bind(this)}
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
            onPress={this.handleFlag.bind(this)}
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
  }
}
