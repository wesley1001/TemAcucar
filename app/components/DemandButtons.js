import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import Button from "./Button"

export default class DemandButtons extends Component {
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
    return (
      <View style={{
        alignSelf: 'stretch',
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
    )
  }
}
