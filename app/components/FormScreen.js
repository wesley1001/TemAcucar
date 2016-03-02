import React, { Platform, View, Image } from 'react-native'

import Colors from "../Colors"
import SimpleScreen from "./SimpleScreen"
import Form from "./Form"

export default FormScreen = (props) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.beige,
    paddingTop: 40 + (Platform.OS === 'ios' ? 24 : 16),
  }}>
    <Form {...props}>
      <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 40,
      }}>
        <Image source={require('../img/logo.png')} style={{marginBottom: 30}}/>
      </View>
      { props.children }
    </Form>
  </View>
)
