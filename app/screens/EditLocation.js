import React, { View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import SetLocation from "../components/SetLocation"

export default EditLocation = (props) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.white,
  }}>
    <NavBar title="Alterar endereço" />
    { props.location.startingUp ? <GiftedSpinner style={{ marginTop: 20 }} /> : <SetLocation {...props} /> }
  </View>
)