import React, { Component } from 'react-native'
import { connect } from 'react-redux'

import { locationGetCoordinates, locationSetCoordinates, locationGetAddress, locationSearch, locationSetLocation } from '../actions/LocationActions'

import Loading from "../screens/Loading"
import SetLocation from "../screens/SetLocation"

class LocationSetter extends Component {
  componentWillMount() {
    const { dispatch, auth } = this.props
    const { currentUser: { latitude, longitude } } = auth
    if (latitude && longitude)
      dispatch(locationSetCoordinates(latitude, longitude))
    else
      dispatch(locationGetCoordinates())
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location, auth: { currentUser } } = nextProps
    const { latitude, longitude, gettingCoordinates, gettingAddress, startingUp } = location
    if (startingUp && !gettingCoordinates && !gettingAddress) {
      dispatch(locationGetAddress(latitude, longitude, currentUser.address_complement))
    }
  }

  handleSearch(search, initializeForm) {
    const { dispatch } = this.props
    dispatch(locationSearch(search, initializeForm))
  }

  handleSetLocation() {
    const { dispatch, location, auth: { credentials } } = this.props
    dispatch(locationSetLocation(location, credentials))
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
