import React from 'react-native'
import FacebookTip from "../components/FacebookTip"
import ShareTip from "../components/ShareTip"

export default DemandsTip = (props) => {
  const { currentUser, neighborsCount, onShare, onFacebook, facebookConnecting } = props
  const title = (neighborsCount < 30 && 'Quanto mais vizinhos, mais trocas! Compartilhe no Facebook, marcando amigos que moram perto de você.')
  const callToAction = (neighborsCount < 30 && 'Chame seus vizinhos')
  if ( !currentUser.facebook_uid && neighborsCount >= 30 ) {
    return (<FacebookTip onPress={onFacebook} loading={facebookConnecting} title={title} />)
  }
  return (<ShareTip onPress={onShare} title={title} callToAction={callToAction} />)
}
