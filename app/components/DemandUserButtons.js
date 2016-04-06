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
    const canReactivate = (state === 'completed' || ((state === 'flagged' || state === 'canceled') && admin))
    return (
      <View style={{
        backgroundColor: Colors.white,
        alignSelf: 'stretch',
        padding: 10,
        paddingTop: 0,
      }}>
        <DemandState state={state} />
        <View style={{
          flexDirection: 'row',
        }}>
          { canComplete && <DemandButton
            onPress={this.handleComplete.bind(this)}
            isLoading={completing}
            style={{ marginTop: 10, backgroundColor: Colors.green }}
          >
            { admin ? 'Concluir pedido' : 'Já consegui' }
          </DemandButton> }
          { canCancel && <DemandButton
            onPress={this.handleCancel.bind(this)}
            isLoading={canceling}
            style={{ marginTop: 10, backgroundColor: Colors.ice, marginLeft: 4 }}
          >
            Cancelar pedido
          </DemandButton> }
          { canReactivate && <DemandButton
            onPress={this.handleReactivate.bind(this)}
            isLoading={reactivating}
            style={{ marginTop: 10, backgroundColor: Colors.ice }}
          >
            Reativar pedido
          </DemandButton> }
        </View>
      </View>
    )
  }
}
