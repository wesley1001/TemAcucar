import React from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Colors from "../styles/Colors"

export default FormSubmit = (props) => (
  <GiftedForm.SubmitWidget
    widgetStyles={{
      submitButton: {
        backgroundColor: Colors.pink,
      },
      disabledSubmitButton: {
        opacity: 1,
        backgroundColor: Colors.gray,
      },
      errorContainer: {
        marginTop: 10,
      },
      errorText: {
        color: Colors.pink,
        textAlign: 'center',
        fontSize: 16,
      },
    }}
    {...props}
  />
)
