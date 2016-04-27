import React, { View } from 'react-native'
import Colors from "../Colors"
import Icon from "./Icon"

export default ReviewRating = ({ rating }) => (
  <View style={{
    flexDirection: 'row',
    marginBottom: 4,
  }}>
    { [1, 2, 3, 4, 5].map((index) => (
      <Icon key={index} name={(index > rating ? "star-border" : "star")} style={{
        color: Colors.darkYellow,
      }}/>
    )) }
  </View>
)
