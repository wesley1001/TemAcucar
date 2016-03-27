import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import Button from "./Button"

export default class DemandButtons extends Component {
  handleRefuse() {
    const { demand, onRefuseDemand } = this.props
    onRefuseDemand(demand)
  }

  handleFlag() {
    Alert.alert(
      'Pedido impróprio?',
      'Você tem certeza que quer denunciar este pedido como impróprio?',
      [{ text: 'Cancelar', style: 'cancel' }, { text: 'OK', onPress: () => {
        const { demand, onFlagDemand } = this.props
        onFlagDemand(demand)
      }}]
    )
  }

  render() {
    return (
      <View style={{
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
      }}>
        <Button
          style={{
            flex: 1,
            paddingVertical: 0,
            height: 30,
          }}
          textStyle={{
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          Ajudar
        </Button>
        <Button
          onPress={this.handleRefuse.bind(this)}
          style={{
            flex: 1,
            backgroundColor: Colors.blue,
            borderColor: Colors.darkBlue,
            paddingVertical: 0,
            height: 30,
            marginHorizontal: 4,
          }}
          textStyle={{
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          Não posso
        </Button>
        <Button
          onPress={this.handleFlag.bind(this)}
          style={{
            flex: 1,
            backgroundColor: Colors.ice,
            borderColor: Colors.darkIce,
            paddingVertical: 0,
            height: 30,
          }}
          textStyle={{
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          Denunciar
        </Button>
      </View>
    )
  }
}
