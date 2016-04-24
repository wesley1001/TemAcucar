import React, { View } from 'react-native'

import Colors from "../Colors"
import Sentence from "./Sentence"
import TimeAgo from "./TimeAgo"
import ReviewRating from "./ReviewRating"

export default Review = ({ review: { rating, text, reviewer, created_at } }) => (
  <View style={{
    marginTop: 10,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  }}>
    <ReviewRating rating={rating} />
    <Sentence style={{
      fontFamily: 'OpenSans-Bold',
      fontSize: 10,
    }}>
      { `${reviewer.first_name} ${reviewer.last_name}` }
    </Sentence>
    <Sentence style={{
      fontFamily: 'OpenSans',
      textAlign: 'center',
      fontSize: 10,
    }}>
      { text || `${reviewer.first_name} não descreveu sua experiência.` }
    </Sentence>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 4,
    }}>
      <Icon name="schedule" style={{ 
        color: Colors.ice,
        marginRight: 4,
        marginTop: 2,
        fontSize: 12,
      }} />
      <TimeAgo time={created_at} style={{
        color: Colors.ice,
      }} />
    </View>
  </View>
)
