import React from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../Colors"

export default FormTextInput = (props) => (
  <GiftedForm.TextInputWidget
    clearButtonMode='while-editing'
    returnKeyType='next'
    image={ props.icon && <Icon name={props.icon || "pencil"} size={15} color={Colors.darkGray} style={{
      width: 15,
      marginLeft: 13,
      marginRight: 2,
    }} /> }
    widgetStyles={{
      rowContainer: {
        borderColor: Colors.lightGray,
        borderBottomWidth: 0.5,
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
        width: 128,
      },
    }}
    {...props}
  />
)
