import React, { Component, View, ScrollView } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import ReviewsContainer from "../containers/ReviewsContainer"

export default class UserReviews extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('UserReviews')
  }

  render() {
    const { auth: { currentUser } } = this.props
    return(
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="Minhas avaliações" />
        <ScrollView style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
          <ReviewsContainer {...this.props} user={currentUser} hideTitle={true} />
        </ScrollView>
      </View>
    )
  }
}
