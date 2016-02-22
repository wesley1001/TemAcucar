import React from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../Colors"

export default Icon = ({name, size, color, style}) => (
  <MaterialIcon
    name={name || 'account-circle'}
    size={size || 18}
    color={color || Colors.brown}
    style={[{
      // marginHorizontal: 10,
    }, style]}
  />
)
