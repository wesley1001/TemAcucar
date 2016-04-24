import React from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default NoReviews = ({ user, currentUser }) => (
  <Sentence style={{
    alignSelf: 'stretch',
    margin: 10,
    textAlign: 'center',
    fontSize: 12,
  }}>
    {user.id === currentUser.id ? 'Você' : user.first_name} ainda não recebeu nenhuma avaliação.
  </Sentence>
)
