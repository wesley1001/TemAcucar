import React from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../styles/Colors"

export default Button = (props) => (
  <ReactNativeButton 
    textStyle={{
      textAlign: 'center',
      color: Colors.white,
      fontSize: 16,
    }}
    {...props}
    style={[{
      alignSelf: 'center',
      borderWidth: 0,
      borderRadius: 0,
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: Colors.pink,
      marginBottom: 0,
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
