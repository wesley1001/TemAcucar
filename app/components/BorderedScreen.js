import React, { Platform, View } from 'react-native'
import Colors from "../Colors"
import NavBar from "./NavBar"

export default BorderedScreen = ({ children, navBar, navBarTitle }) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.blue,
    paddingTop: (!navBar && Platform.OS === 'ios' ? 20 : 0)
  }}>
    { navBar && <NavBar title={navBarTitle} /> }
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderColor: Colors.pink,
      borderWidth: 8,
    }}>
      <View style={{
        borderColor: Colors.lightPink,
        borderWidth: 8,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          borderColor: Colors.darkBeige,
          borderWidth: 8,
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {children}
        </View>
      </View>
    </View>
  </View>
)
 