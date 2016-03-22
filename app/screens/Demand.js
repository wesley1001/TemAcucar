import React, { View } from 'react-native'

import Sentence from "../components/Sentence"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"

export default Demand = (props) => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <DemandHeader {...props} />
    <Sentence style={{
      fontSize: 10,
      padding: 20,
    }}>
      {props.demand.description}
    </Sentence>
    <DemandButtons {...props} />
  </View>
)
