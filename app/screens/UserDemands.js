import React, { View, ScrollView } from 'react-native'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import Demands from "../components/Demands"

export default UserDemands = ({ auth: {currentUser}, userDemands, onListUserDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.white,
  }}>
    <NavBar title="Meus pedidos" />
    <ScrollView style={{
      flex: 1,
    }}>
      <Demands
        currentUser={currentUser}
        demands={userDemands.list}
        listing={userDemands.listing}
        canList={userDemands.canList}
        onList={onListUserDemands}
        onComplete={onCompleteDemand}
        onCancel={onCancelDemand}
        onReactivate={onReactivateDemand}
        onView={onViewDemand}
        noDemandsText="Você ainda não fez nenhum pedido"
      />
    </ScrollView>
  </View>
)
