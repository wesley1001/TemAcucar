import React, { View } from 'react-native'
import Colors from "../Colors"
import BorderedScreen from "../components/BorderedScreen"
import SetLocationHeader from "../components/SetLocationHeader"
import SetLocation from "../components/SetLocation"

export default ReviewLocation = (props) => (
  <BorderedScreen>
    <SetLocationHeader />
    <SetLocation {...props} />
  </BorderedScreen>
)
