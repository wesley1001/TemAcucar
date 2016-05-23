import React, { View } from 'react-native'
import Colors from "../Colors"

export default DemandState = ({ state, style }) => (
  <View style={[{
    borderRadius: 4,
    backgroundColor: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.ice)),
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }, style]}>
    <Icon name={(state === 'completed' ? 'check-circle' : (state === 'canceled' ? 'cancel' : (state === 'flagged' ? 'report' : 'schedule')))} style={{ 
      color: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.ice)),
      color: Colors.white,
      fontSize: 14,
      marginRight: 6,
    }} />
    <Sentence style={{
      fontFamily: 'BoosterNextFY-Bold',
      fontSize: 8,
      lineHeight: 10,
      color: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.ice)),
      color: Colors.white,
    }}>
      {(state === 'completed' ? 'Bem-sucedido' : (state === 'canceled' ? 'Cancelado' : (state === 'notifying' ? 'Perguntando pros vizinhos' : (state === 'flagged' ? 'Denunciado como impróprio' : 'Em andamento'))))}
    </Sentence>
  </View>
)
