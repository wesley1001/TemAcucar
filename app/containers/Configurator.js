import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { termsAccept, termsReject, termsCancelReject, termsScrollToBottom } from '../actions/TermsActions'
import { usersConfirmEmail } from '../actions/UsersActions'

import Loading from "../components/Loading"
import RejectedTerms from "../components/RejectedTerms"
import Terms from "../components/Terms"
import ReviewEmail from "../components/ReviewEmail"
import Neighborhood from "../components/Neighborhood"

class Configurator extends Component {
  handleAcceptTerms() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(termsAccept(credentials))
  }

  handleRejectTerms() {
    const { dispatch } = this.props
    dispatch(termsReject())
  }

  handleCancelRejectTerms() {
    const { dispatch } = this.props
    dispatch(termsCancelReject())
  }

  handleScrollToBottomTerms() {
    const { dispatch } = this.props
    dispatch(termsScrollToBottom())
  }

  handleConfirmEmail() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(usersConfirmEmail(credentials))
  }

  handleUpdateEmail() {
    console.log('update')
  }

  render() {
    const { currentUser, terms } = this.props
    const { acceptingTerms, rejectedTerms } = terms
    if (acceptingTerms)
      return (<Loading />)
    if (rejectedTerms)
      return (<RejectedTerms onCancelRejectTerms={this.handleCancelRejectTerms.bind(this)} />)
    if (!currentUser.accepted_terms)
      return (<Terms onAcceptTerms={this.handleAcceptTerms.bind(this)} onRejectTerms={this.handleRejectTerms.bind(this)} onScrollToBottom={this.handleScrollToBottomTerms.bind(this)} />)
    if (!currentUser.reviewed_email)
      return (<ReviewEmail currentUser={currentUser} onConfirm={this.handleConfirmEmail.bind(this)}  onUpdate={this.handleUpdateEmail.bind(this)} />)
    return (<Neighborhood {...this.props} />)
  }
}

export default connect(state => ({
  terms: state.terms,
}))(Configurator)
