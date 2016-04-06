import React, { ScrollView, Platform } from 'react-native'
import Colors from "../Colors"
import Headline from "../components/Headline"
import Demands from "../components/Demands"

export default AdminDemands = ({ auth: {currentUser}, adminDemands, onListAdminDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <ScrollView style={{
    flex: 1,
    backgroundColor: Colors.beige,
    paddingTop: 60 + (Platform.OS === 'ios' ? 24 : 16),
  }}>
    <Headline style={{marginBottom: 4}}>Todos os pedidos</Headline>
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
)
