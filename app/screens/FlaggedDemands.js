import React, { View, ScrollView } from 'react-native'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import Demands from "../components/Demands"

export default FlaggedDemands = ({ auth: {currentUser}, flaggedDemands, onListFlaggedDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <View style={{
    flex: 1,
  }}>
    <NavBar title="Pedidos impróprios" />
    <ScrollView style={{
      flex: 1,
    }}>
      <Demands
        admin={true}
        currentUser={currentUser}
        demands={flaggedDemands.list}
        listing={flaggedDemands.listing}
        canList={flaggedDemands.canList}
        onList={onListFlaggedDemands}
        onComplete={onCompleteDemand}
        onCancel={onCancelDemand}
        onReactivate={onReactivateDemand}
        onView={onViewDemand}
      />
    </ScrollView>
  </View>
)
