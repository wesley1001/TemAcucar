import React, { View, ScrollView } from 'react-native'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import Demands from "../components/Demands"

export default AdminDemands = ({ auth: {currentUser}, adminDemands, onListAdminDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <View style={{
    flex: 1,
  }}>
    <NavBar title="Todos os pedidos" />
    <ScrollView style={{
      flex: 1,
    }}>
      <Demands
        admin={true}
        currentUser={currentUser}
        demands={adminDemands.list}
        listing={adminDemands.listing}
        canList={adminDemands.canList}
        onList={onListAdminDemands}
        onComplete={onCompleteDemand}
        onCancel={onCancelDemand}
        onReactivate={onReactivateDemand}
        onView={onViewDemand}
      />
    </ScrollView>
  </View>
)
