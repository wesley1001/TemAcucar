import React, { View } from 'react-native'
import Colors from "../Colors"
import BorderedView from "../components/BorderedView"
import SetLocationHeader from "../components/SetLocationHeader"
import SetLocation from "../components/SetLocation"

export default ReviewLocation = (props) => (
  <BorderedView>
    <SetLocationHeader />
    <SetLocation {...props} />
  </BorderedView>
)
