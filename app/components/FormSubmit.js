import React from 'react-native'
import Button from "./Button"

export default FormSubmit = (props) => (
  <Button
    isDisabled={!props.dirty || !props.valid || props.submitting}
    onPress={props.handleSubmit(props.onSubmit)}
    {...props}
    style={[{
      alignSelf: 'stretch',
      margin: 15,
      marginBottom: 20,
    }, props.style]}
  >
    {props.children}
  </Button>
)
