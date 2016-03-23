import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

import * as TermsActions from '../actions/TermsActions'
import * as ConfigActions from '../actions/ConfigActions'

import LocationSetter from "./LocationSetter"
import Loading from "../screens/Loading"
import RejectedTerms from "../screens/RejectedTerms"
import Terms from "../screens/Terms"
import ReviewEmailRouter from "../routers/ReviewEmailRouter"
import DashboardContainer from "./DashboardContainer"

class Configurator extends Component {
  handleAcceptTerms() {
    const { dispatch, auth: { credentials } } = this.props
    dispatch(TermsActions.accept(credentials))
  }

  handleRejectTerms() {
    const { dispatch } = this.props
    dispatch(TermsActions.reject())
  }

  handleCancelRejectTerms() {
    const { dispatch } = this.props
    dispatch(TermsActions.cancelReject())
  }

  handleContact() {
    Communications.web('mailto:contato@temacucar.com')
  }

  handleScrollTerms(event) {
    const { dispatch, terms } = this.props
    const { scrolledToBottom } = terms
    if (scrolledToBottom)
      return
    const { nativeEvent } = event
    if(nativeEvent.contentOffset.y >= (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - 1)) {
      dispatch(TermsActions.scrollToBottom())
    }
  }

  handleConfirmEmail() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(ConfigActions.confirmEmail(credentials))
  }

  handleUpdateEmail(data) {
    const { dispatch, auth } = this.props
    const { currentUser, credentials } = auth
    dispatch(ConfigActions.updateEmail(data.email, currentUser.email, credentials))
  }

  render() {
    const { auth, terms, config } = this.props
    const { currentUser } = auth
    const { acceptingTerms, rejectedTerms, scrolledToBottom } = terms
    const { confirmingEmail } = config
    if (acceptingTerms || confirmingEmail)
      return (<Loading />)
    if (rejectedTerms)
      return (<RejectedTerms onCancelRejectTerms={this.handleCancelRejectTerms.bind(this)} onContact={this.handleContact.bind(this)} />)
    if (!currentUser.accepted_terms)
      return (<Terms onAcceptTerms={this.handleAcceptTerms.bind(this)} onRejectTerms={this.handleRejectTerms.bind(this)} onScroll={this.handleScrollTerms.bind(this)} scrolledToBottom={scrolledToBottom} />)
    if (!currentUser.reviewed_email)
      return (<ReviewEmailRouter {...this.props} onConfirm={this.handleConfirmEmail.bind(this)} onUpdateEmail={this.handleUpdateEmail.bind(this)} />)
    if (!currentUser.latitude || !currentUser.longitude || !currentUser.reviewed_location)
      return (<LocationSetter {...this.props} />)
    return (<DashboardContainer {...this.props} />)
  }
}

export default connect(state => ({
  config: state.config,
  terms: state.terms,
}))(Configurator)
