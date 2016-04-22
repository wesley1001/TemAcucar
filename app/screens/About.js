import React, { Text } from 'react-native'
import Package from '../../package.json'
import Config from 'react-native-config'

import SimpleScreen from "../components/SimpleScreen"

export default About = () => (
  <SimpleScreen headline="Sobre">
    <Sentence style={{marginBottom: 20}}>
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Versão compilada:</Text> {Config.BUILD}
    </Sentence>
    <Sentence>
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Versão JavaScript:</Text> {Package.version}
    </Sentence>
  </SimpleScreen>
)
