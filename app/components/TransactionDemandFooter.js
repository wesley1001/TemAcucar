import React, { View } from 'react-native'
import Colors from "../Colors"
import DemandState from "./DemandState"
import DemandUserButtons from "./DemandUserButtons"

export default TransactionDemandFooter = ({ demand, currentUser, onComplete, onCancel, onReactivate }) => (
  <View style={{
    padding: (currentUser.id === demand.user.id ? 0 : 10),
    paddingTop: 10,
  }}>
    { currentUser.id === demand.user.id && <DemandUserButtons
      currentUser={currentUser}
      demand={demand}
      onComplete={onComplete}
      onCancel={onCancel}
      onReactivate={onReactivate}
    /> }
    { currentUser.id !== demand.user.id && <DemandState state={demand.state} /> }
  </View>
)
