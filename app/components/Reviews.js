import React, { Component, Platform, View, Text } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../Colors"
import LoadMore from "../components/LoadMore"
import Review from "../components/Review"
import NoReviews from "../components/NoReviews"

export default class Reviews extends Component {
  render() {
    const { onList, user, reviews, listing, canList, currentUser, hideTitle } = this.props
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        { !hideTitle && 
          <View>
            <Text style={{
              marginHorizontal: 20,
              textAlign: 'center',
              color: Colors.brown,
              fontSize: 14,
              lineHeight: (Platform.OS === 'ios' ? 14 : 16),
              fontFamily: 'BoosterNextFY-Black',
            }}>
              { user.id === currentUser.id ? 'Suas avaliações' : `Avaliações de ${user.first_name} ${user.last_name}` }
            </Text>
          </View>
        }
        { reviews.map((review, index) => (
          <Review
            key={review.id}
            review={review}
            index={index}
            currentUser={currentUser}
          />
        )) }
        { listing && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { reviews.length === 0 && !listing && <NoReviews user={user} currentUser={currentUser} /> }
        { canList && !listing &&
          <LoadMore onPress={onList} style={{
            marginTop: 20,
          }} />
        }
      </View>
    )
  }
}
