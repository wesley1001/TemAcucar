import React, {
  Component,
  View,
  Image,
} from 'react-native'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Headline from "./Headline"

export default SimpleScreen = ({ children, headline, viewStyle }) => (
  <View style={
    [{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    }, viewStyle]
  }>
    <View style={{
      alignSelf: 'stretch',
      alignItems: 'center',
    }}>
      <Image source={require('../img/logo.jpg')} style={!headline && StyleSheets.bigMarginBottom}/>
    </View>
    { headline && <Headline>{headline}</Headline> }
    {children}
  </View>
)
