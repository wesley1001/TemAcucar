import React, { View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import Colors from "../Colors"
import BorderedScreen from "../components/BorderedScreen"
import NavBar from "../components/NavBar"
import SetLocation from "../components/SetLocation"

export default EditLocation = (props) => (
  <BorderedScreen navBar={true} navBarTitle="Alterar endereço">
    { props.location.startingUp ? <GiftedSpinner style={{ marginTop: 20 }} /> : <SetLocation {...props} /> }
  </BorderedScreen>
)
