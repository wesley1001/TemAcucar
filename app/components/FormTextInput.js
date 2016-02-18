import React from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"

export default FormTextInput = (props) => (
  <GiftedForm.TextInputWidget
    clearButtonMode='while-editing'
    returnKeyType='next'
    image={ props.icon && <Icon name={props.icon} size={15} color={Colors.darkGray} style={{
      width: 15,
      marginLeft: 13,
      marginRight: 2,
    }} /> }
    widgetStyles={{
      rowContainer: {
        borderColor: Colors.lightGray,
        borderBottomWidth: 0.5,
      },
      row: {
        marginLeft: (props.icon ? 0 : 10),
      },
      textInputInline: {
        fontFamily: 'OpenSans',
        backgroundColor: Colors.white,
        color: Colors.pink,
      },
      textInputTitleInline: {
        fontFamily: 'OpenSans',
        color: Colors.brown,
        fontWeight: 'bold',
        width: 98,
      },
    }}
    {...props}
  />
)
