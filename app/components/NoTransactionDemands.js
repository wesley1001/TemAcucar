import React from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default NoTransactionDemands = () => (
  <Sentence style={{
    alignSelf: 'stretch',
    fontSize: 12,
    padding: 10,
    textAlign: 'center',
  }}>
    Você ainda não realizou nenhuma transação. Que tal começar agora mesmo fazendo um pedido?
  </Sentence>
)
