import React, { Platform, View, Image } from 'react-native'

import Colors from "../Colors"
import BorderedScreen from "./BorderedScreen"
import NavBar from "./NavBar"
import Form from "./Form"

export default FormScreen = (props) => (
  <BorderedScreen navBar={props.navBar} navBarTitle={props.navBarTitle}>
    <Form {...props}>
      <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 40,
      }}>
        <Image source={require('../img/logo.png')} style={{
          marginBottom: 30,
          width: 134,
          height: 86,
        }}/>
      </View>
      { props.children }
    </Form>
  </BorderedScreen>
)
