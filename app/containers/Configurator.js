import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { termsAccept, termsReject, termsCancelReject, termsScrollToBottom } from '../actions/TermsActions'
import { configConfirmEmail, configUpdateEmail } from '../actions/ConfigActions'

import Loading from "../components/Loading"
import RejectedTerms from "../components/RejectedTerms"
import Terms from "../components/Terms"
import UnreviewedEmail from "../components/UnreviewedEmail"
import SetLocation from "../components/SetLocation"
import Neighborhood from "./Neighborhood"

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
    dispatch(configConfirmEmail(credentials))
  }

  handleUpdateEmail(data) {
    const { dispatch, auth } = this.props
    const { currentUser, credentials } = auth
    dispatch(configUpdateEmail(data.email, currentUser.email, credentials, currentUser.password))
  }

  render() {
    const { auth, currentUser, terms, config } = this.props
    const { acceptingTerms, rejectedTerms } = terms
    const { confirmingEmail } = config
    if (acceptingTerms || confirmingEmail)
      return (<Loading />)
    if (rejectedTerms)
      return (<RejectedTerms onCancelRejectTerms={this.handleCancelRejectTerms.bind(this)} />)
    if (!currentUser.accepted_terms)
      return (<Terms onAcceptTerms={this.handleAcceptTerms.bind(this)} onRejectTerms={this.handleRejectTerms.bind(this)} onScrollToBottom={this.handleScrollToBottomTerms.bind(this)} />)
    if (!currentUser.reviewed_email)
      return (<UnreviewedEmail currentUser={currentUser} onConfirm={this.handleConfirmEmail.bind(this)} onUpdate={this.handleUpdateEmail.bind(this)} />)
    if (!currentUser.latitude || !currentUser.longitude || !currentUser.reviewed_location)
      return (<SetLocation auth={auth} currentUser={currentUser} />)
    return (<Neighborhood {...this.props} />)
  }
}

export default connect(state => ({
  config: state.config,
  terms: state.terms,
}))(Configurator)
