import React from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../Colors"

export default FormTextInput = (props) => (
  <GiftedForm.TextInputWidget
    clearButtonMode='while-editing'
    returnKeyType='next'
    image={ <Icon name={props.icon || "pencil"} size={15} color={Colors.darkGray} style={{
      width: 15,
      marginLeft: 13,
      marginRight: 2,
    }} /> }
    widgetStyles={{
      rowContainer: {
        borderColor: Colors.gray,
        borderBottomWidth: 0.5,
      },
      textInputInline: {
        backgroundColor: Colors.white
      }
    }}
    {...props}
  />
)
