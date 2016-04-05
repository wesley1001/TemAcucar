import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import DemandButton from "./DemandButton"

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
        backgroundColor: Colors.white,
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
      }}>
        <DemandButton
          onPress={this.handleAccept.bind(this)}
          isLoading={creatingTransaction}
        >
          Ajudar
        </DemandButton>
        <DemandButton
          onPress={this.handleRefuse.bind(this)}
          style={{
            backgroundColor: Colors.blue,
            marginHorizontal: 4,
          }}
        >
          Não posso
        </DemandButton>
        <DemandButton
          onPress={this.handleFlag.bind(this)}
          style={{ backgroundColor: Colors.ice }}
        >
          Denunciar
        </DemandButton>
      </View>
    )
  }
}
