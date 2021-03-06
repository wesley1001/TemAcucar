import React, { View, Image } from 'react-native'
import BorderedScreen from "./BorderedScreen"
import Headline from "./Headline"

export default SimpleScreen = ({ children, headline, navBar, navBarTitle, addTopMargin }) => (
  <BorderedScreen navBar={navBar} navBarTitle={navBarTitle}>
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (addTopMargin ? 30 : 0),
      marginBottom: (headline ? 26 : 30),
    }}>
      <Image source={require('../img/logo.png')} style={{
        width: 134,
        height: 86,
      }}/>
    </View>
    { headline && <Headline>{headline}</Headline> }
    {children}
  </BorderedScreen>
)
 