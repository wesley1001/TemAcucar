import React from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import SimpleScreen from "../components/SimpleScreen"
import TextBox from "../components/TextBox"

export default Loading = ({ status }) => (
  <SimpleScreen>
    <TextBox style={{ height: 50, lineHeight: 20 }}>{status}</TextBox>
    <GiftedSpinner style={{ marginVertical: 20 }} />
  </SimpleScreen>
)
