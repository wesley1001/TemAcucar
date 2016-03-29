import React from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = (props) => (
  <ReactNativeButton 
    {...props}
    activityIndicatorColor={Colors.white}
    textStyle={[{
      textAlign: 'center',
      color: Colors.white,
      fontSize: 14,
      fontFamily: 'BoosterNextFY-Black',
      lineHeight: 20,
    }, props.textStyle]}
    disabledStyle={[{
      backgroundColor: Colors.gray,
      borderColor: Colors.darkGray,
    }, props.disabledStyle]}
    style={[{
      alignSelf: 'center',
      borderWidth: 0,
      borderRadius: 6,
      paddingHorizontal: 40,
      paddingVertical: 8,
      backgroundColor: Colors.pink,
      marginBottom: 0,
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
