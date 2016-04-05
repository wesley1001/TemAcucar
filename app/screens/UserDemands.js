import React, { ScrollView, Platform } from 'react-native'
import Colors from "../Colors"
import Headline from "../components/Headline"
import Demands from "../components/Demands"

export default UserDemands = ({ auth: {currentUser}, userDemands, onListUserDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, onViewDemand }) => (
  <ScrollView style={{
    flex: 1,
    backgroundColor: Colors.beige,
    paddingTop: 60 + (Platform.OS === 'ios' ? 24 : 16),
  }}>
    <Headline style={{marginBottom: 4}}>Meus pedidos</Headline>
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
    />
  </ScrollView>
)
