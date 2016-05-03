import React, { Component, View } from 'react-native'
import { connect } from 'react-redux'

import * as LocationActions from '../actions/LocationActions'
import Loading from "../screens/Loading"
import ReviewLocation from "../screens/ReviewLocation"
import EditLocation from "../screens/EditLocation"

class LocationContainer extends Component {
  componentWillMount() {
    const { dispatch, auth: { currentUser } } = this.props
    const { latitude, longitude } = currentUser
    if (currentUser.address_thoroughfare) {
      this.handleSearch({
        thoroughfare: currentUser.address_thoroughfare,
        subThoroughfare: currentUser.address_sub_thoroughfare,
        complement: currentUser.address_complement,
        subLocality: currentUser.address_sub_locality,
        locality: currentUser.address_locality,
        subAdministrativeArea: currentUser.address_sub_administrative_area,
        administrativeArea: currentUser.address_administrative_area,
        country: currentUser.address_country,
      })
    } else if (latitude && longitude) {
      dispatch(LocationActions.setCoordinates(latitude, longitude))
    } else {
      dispatch(LocationActions.getCoordinates())
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location, auth: { currentUser } } = nextProps
    const { latitude, longitude, gettingCoordinates, gettingAddress, searching, startingUp } = location
    if (startingUp && !gettingCoordinates && !gettingAddress && !searching) {
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
    const { location: { startingUp }, auth } = this.props
    const { currentUser: { reviewed_location } } = auth
    if ( reviewed_location )
      return (<EditLocation {...this.props} onSearch={this.handleSearch.bind(this)} onSetLocation={this.handleSetLocation.bind(this)} />)
    if ( startingUp )
      return (<Loading />)
    return (<ReviewLocation {...this.props} onSearch={this.handleSearch.bind(this)} onSetLocation={this.handleSetLocation.bind(this)} />)
  }
}

export default connect(state => ({
  location: state.location,
}))(LocationContainer)
