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
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onFlag } = this.props
        onFlag(demand)
      }}]
    )
  }

  render() {
    const { demand } = this.props
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
