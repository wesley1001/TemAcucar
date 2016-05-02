import React, { View, ScrollView } from 'react-native'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import ReviewsContainer from "../containers/ReviewsContainer"

export default UserReviews = (props) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.white,
  }}>
    <NavBar title="Minhas avaliações" />
    <ScrollView style={{
      flex: 1,
      paddingHorizontal: 10,
    }}>
      <ReviewsContainer {...props} user={props.auth.currentUser} hideTitle={true} />
    </ScrollView>
  </View>
)
