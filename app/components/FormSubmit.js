import React from 'react-native'
import Button from "./Button"

export default FormSubmit = (props) => (
  <Button
    style={{
      alignSelf: 'stretch',
      margin: 24,
      marginBottom: 24,
    }}
    isDisabled={!props.dirty || !props.valid || props.submitting}
    onPress={props.handleSubmit(props.onSubmit)}
    {...props}
  >
    {props.children}
  </Button>
)
