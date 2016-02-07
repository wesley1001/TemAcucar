import React from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default FormTextInput = (props) => (
  <GiftedForm.TextInputWidget
    clearButtonMode='while-editing'
    image={ <Icon name={props.icon || "pencil"} size={15} color={Colors.darkGray} style={{width: 30, height: 30, paddingHorizontal: 12, paddingVertical: 8}} /> }
    widgetStyles={{
      rowContainer: {
        borderColor: Colors.gray,
        borderBottomWidth: 0.5,
      },
    }}
    {...props}
  />
)
