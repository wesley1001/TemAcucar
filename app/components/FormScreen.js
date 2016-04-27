import React, { Platform, View, Image } from 'react-native'

import Colors from "../Colors"
import NavBar from "./NavBar"
import Form from "./Form"

export default FormScreen = (props) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.beige,
  }}>
    { props.navBar && <NavBar title={props.navBarTitle} /> }
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
  </View>
)
