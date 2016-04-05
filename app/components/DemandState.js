import React, { View } from 'react-native'
import Colors from "../Colors"

export default DemandState = ({ state, style }) => (
  <View style={[{
    backgroundColor: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.ice)),
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }, style]}>
    <Icon name={(state === 'completed' ? 'check-circle' : (state === 'canceled' ? 'cancel' : 'schedule'))} style={{ 
      color: Colors.white,
      fontSize: 14,
      marginRight: 6,
    }} />
    <Sentence style={{
      fontFamily: 'BoosterNextFY-Bold',
      fontSize: 8,
      lineHeight: 10,
      color: Colors.white,
    }}>
      Pedido {(state === 'completed' ? 'bem-sucedido' : (state === 'canceled' ? 'cancelado' : (state === 'sending' ? 'enviando convites' : 'em andamento')))}
    </Sentence>
  </View>
)
