import React from 'react-native'

import Colors from "../Colors"
import SimpleScreen from "./SimpleScreen"
import Form from "./Form"

export default FormScreen = (props) => (
  <SimpleScreen viewStyle={{
    alignItems: 'stretch',
    flex: 1,
    paddingTop: 120,
    backgroundColor: Colors.beige,
  }}>
    <Form {...props}>
      { props.children }
    </Form>
  </SimpleScreen>
)
