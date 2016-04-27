import React from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import Tip from "./Tip"

export default NoDemands = () => (
  <Tip>
    <Sentence style={{
      alignSelf: 'stretch',
      marginHorizontal: 10,
      textAlign: 'center',
      fontSize: 10,
    }}>
      Nenhum pedido encontrado. Que tal começar agora mesmo fazendo um pedido?
    </Sentence>
  </Tip>
)
