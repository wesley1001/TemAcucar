import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import DemandButton from "./DemandButton"

export default class DemandUserButtons extends Component {
  handleComplete() {
    const { demand, onComplete } = this.props
    onComplete(demand)
  }

  handleCancel() {
    Alert.alert(
      'Cancelar pedido?',
      'Você tem certeza que quer cancelar este pedido?',
      [{ text: 'Cancelar', style: 'cancel' }, { text: 'OK', onPress: () => {
        const { demand, onCancel } = this.props
        onCancel(demand)
      }}]
    )
  }

  handleReactivate() {
    const { demand, onReactivate } = this.props
    onReactivate(demand)
  }

  render() {
    const { demands, admin } = this.props
    // This is a hack to update state of demand on ViewDemand
    let demand
    if (demands) {
      const viewDemand = this.props.demand
      demand = demands.filter(demand => demand.id === viewDemand.id)[0] || viewDemand
    } else {
      demand = this.props.demand
    }
    const { state, completing, canceling, reactivating } = demand
    const canComplete = (state === 'sending' || state === 'active')
    const canCancel = (state === 'sending' || state === 'active')
    const canReactivate = (state === 'completed' || state === 'canceled')
    return (
      <View style={{
        backgroundColor: Colors.white,
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
      }}>
        { canComplete && <DemandButton
          onPress={this.handleComplete.bind(this)}
          isLoading={completing}
          style={{ backgroundColor: Colors.green }}
        >
          { admin ? 'Concluir pedido' : 'Já consegui' }
        </DemandButton> }
        { canCancel && <DemandButton
          onPress={this.handleCancel.bind(this)}
          isLoading={canceling}
          style={{ backgroundColor: Colors.ice, marginLeft: 4 }}
        >
          Cancelar pedido
        </DemandButton> }
        { canReactivate && <DemandButton
          onPress={this.handleReactivate.bind(this)}
          isLoading={reactivating}
          style={{ backgroundColor: Colors.ice, marginLeft: 4 }}
        >
          Reativar pedido
        </DemandButton> }
      </View>
    )
  }
}
