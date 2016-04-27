import React, {
  Component,
  View,
  Image,
} from 'react-native'

import Colors from "../Colors"
import Headline from "./Headline"
import NavBar from "./NavBar"

export default SimpleScreen = ({ children, headline, navBar, navBarTitle, viewStyle }) => (
  <View style={{
    flex: 1,
  }}>
    { navBar && <NavBar title={navBarTitle} /> }
    <View style={
      [{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.beige,
      }, viewStyle]
    }>
      <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
        <Image source={require('../img/logo.png')} style={{
          marginBottom: (headline ? 36 : 40),
          width: 134,
          height: 86,
        }}/>
      </View>
      { headline && <Headline>{headline}</Headline> }
      {children}
    </View>
  </View>
)
