import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import * as LocationActions from '../actions/LocationActions'

import Loading from "../screens/Loading"
import SetLocation from "../screens/SetLocation"

class LocationSetter extends Component {
  componentWillMount() {
    const { dispatch, auth } = this.props
    const { currentUser: { latitude, longitude } } = auth
    if (latitude && longitude)
      dispatch(LocationActions.setCoordinates(latitude, longitude))
    else
      dispatch(LocationActions.getCoordinates())
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location, auth: { currentUser } } = nextProps
    const { latitude, longitude, gettingCoordinates, gettingAddress, startingUp } = location
    if (startingUp && !gettingCoordinates && !gettingAddress) {
      dispatch(LocationActions.getAddress(latitude, longitude, currentUser.address_complement))
    }
  }

  handleSearch(search, initializeForm) {
    const { dispatch } = this.props
    dispatch(LocationActions.search(search, initializeForm))
  }

  handleSetLocation() {
    const { dispatch, location, auth: { credentials } } = this.props
    dispatch(LocationActions.setLocation(location, credentials))
  }

  render() {
    const { location: { startingUp } } = this.props
    if (startingUp)
      return(<Loading />)
    return (<SetLocation {...this.props} onSearch={this.handleSearch.bind(this)} onSetLocation={this.handleSetLocation.bind(this)} />)
  }
}

export default connect(state => ({
  location: state.location,
}))(LocationSetter)
