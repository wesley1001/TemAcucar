import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import Button from "./Button"

export default class DemandButtons extends Component {
  handleAccept() {
    const { demand, onAccept } = this.props
    onAccept(demand)
  }

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
    const { demands } = this.props
    // This is a hack to update creatingTransaction of demand on ViewDemand
    let demand
    if (demands) {
      const viewDemand = this.props.demand
      demand = demands.filter(demand => demand.id === viewDemand.id)[0] || viewDemand
    } else {
      demand = this.props.demand
    }
    const { creatingTransaction } = demand
    return (
      <View style={{
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
      }}>
        <Button
          onPress={this.handleAccept.bind(this)}
          isLoading={creatingTransaction}
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
