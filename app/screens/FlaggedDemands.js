import React, { ScrollView, Platform } from 'react-native'
import Colors from "../Colors"
import Headline from "../components/Headline"
import Demands from "../components/Demands"

export default FlaggedDemands = ({ auth: {currentUser}, flaggedDemands, onListFlaggedDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <ScrollView style={{
    flex: 1,
    backgroundColor: Colors.beige,
    paddingTop: 60 + (Platform.OS === 'ios' ? 24 : 16),
  }}>
    <Headline style={{marginBottom: 4}}>Pedidos impróprios</Headline>
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
)
