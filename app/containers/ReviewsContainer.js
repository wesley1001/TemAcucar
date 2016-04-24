import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as ReviewsActions from '../actions/ReviewsActions'

import Reviews from "../components/Reviews"

class ReviewsContainer extends Component {
  componentWillMount() {
    const { dispatch, auth, user } = this.props
    const { credentials, currentUser } = auth
    dispatch(ReviewsActions.list(credentials, currentUser, user))
  }

  handleList() {
    const { dispatch, auth, reviews, user } = this.props
    const { credentials, currentUser } = auth
    const { offset } = reviews
    dispatch(ReviewsActions.list(credentials, currentUser, user, offset))
  }

  render() {
    const { auth, reviews, user } = this.props
    const { currentUser } = auth
    return (
      <Reviews
        {...this.props}
        user={user}
        reviews={reviews.list}
        listing={reviews.listing}
        canList={reviews.canList}
        currentUser={currentUser}
        onList={this.handleList.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  reviews: state.reviews,
}))(ReviewsContainer)
