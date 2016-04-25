import React from 'react-native'
import FacebookTip from "../components/FacebookTip"
import ShareTip from "../components/ShareTip"

export default DemandsTip = (props) => {
  const { currentUser, neighborsCount, onShare, onFacebook, facebookConnecting } = props
  const title = (neighborsCount < 30 && 'Você tem poucos vizinhos cadastrados. Que tal chamar seus amigos?')
  if ( !currentUser.facebook_uid ) {
    return (<FacebookTip onPress={onFacebook} loading={facebookConnecting} title={title} />)
  }
  return (<ShareTip onPress={onShare} title={title} />)
}
