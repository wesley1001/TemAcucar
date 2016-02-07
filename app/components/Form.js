import React, { View } from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'

import Colors from "../styles/Colors"
import SimpleScreen from "./SimpleScreen"

export default Form = ({ name, validators, children }) => (
  <SimpleScreen viewStyle={{
    alignItems: 'stretch',
    flex: 1,
    paddingTop: 120,
    backgroundColor: Colors.white,
  }}>
    <View style={{
      flex: 1,
      borderColor: '#666',
      borderTopWidth: 0.5,
    }}>
      <GiftedForm
        scrollEnabled={false}
        formStyles={{
          containerView: {
            backgroundColor: Colors.ice,
          }
        }}
        formName={name}
        validators={validators}
      >
        {children}
      </GiftedForm>
    </View>
  </SimpleScreen>
)
