import React from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import Tip from "./Tip"

export default NoDemands = ({ text }) => (
  <Tip>
    <Sentence style={{
      alignSelf: 'stretch',
      marginHorizontal: 10,
      textAlign: 'center',
      fontSize: 10,
    }}>
      { `${text || 'Você ainda não recebeu pedidos dos seus vizinhos'}. Que tal agitar sua vizinhança pedindo algo que você precisa?` }
    </Sentence>
  </Tip>
)
