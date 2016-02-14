import RNGeocoder from 'react-native-geocoder'

import Config from "../Config"
import { authHeaders, authCredentials } from './AuthActions'
import { parseError } from './BasicActions'

export function locationGetCoordinates() {
  return dispatch => {
    dispatch({ type: 'LOCATION_GET_COORDINATES_REQUEST' })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        dispatch({
          type: 'LOCATION_GET_COORDINATES_SUCCESS',
          latitude,
          longitude,
        })
      },
      (error) => {
        dispatch({
          type: 'LOCATION_GET_COORDINATES_FAILURE',
          error: {id: error.code, message: error.message},
        })
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }  
}

export function locationSetCoordinates(latitude, longitude) {
  return dispatch => {
    dispatch({
      type: 'LOCATION_SET_COORDINATES',
      latitude,
      longitude,
    })
  }
}

export function locationGetAddress(latitude, longitude) {
  return dispatch => {
    dispatch({ type: 'LOCATION_GET_ADDRESS_REQUEST' })
    RNGeocoder.reverseGeocodeLocation({latitude, longitude}, (error, data) => {
      if(!error && data && data[0]) { 
        dispatch({
          type: 'LOCATION_GET_ADDRESS_SUCCESS',
          address: data[0],
        })
      } else {
        dispatch({
          type: 'LOCATION_GET_ADDRESS_FAILURE',
          error: {id: 'location_get_address_failure', message: error},
        })
      }
    })        
  }  
}

export function locationSetSearch(search) {
  return dispatch => {
    dispatch({
      type: 'LOCATION_SET_SEARCH',
      search,
    })
  }
}

export function locationSearch(search) {
  return dispatch => {
    if (!(search && search.length > 0))
      return
    dispatch({ type: 'LOCATION_SEARCH_REQUEST' })
    RNGeocoder.geocodeAddress(search, (error, data) => {
      const address = data && data[0]
      if(!error && address) { 
        dispatch({
          type: 'LOCATION_SEARCH_SUCCESS',
          address: address,
          latitude: address.location.lat,
          longitude: address.location.lng,
        })
      } else {
        dispatch({
          type: 'LOCATION_SEARCH_FAILURE',
          error: {id: 'location_search_failure', message: error},
        })
      }
    })        
  }  
}

export function locationSetLocation(location, credentials) {
  return dispatch => {
    const { latitude, longitude, address } = location
    dispatch({ type: 'LOCATION_SET_LOCATION_REQUEST' })
    fetch(`${Config.apiUrl}/users/${credentials.uid}`, {
      method: 'put',
      headers: authHeaders(credentials),
      body: JSON.stringify({
        reviewed_location: true,
        latitude,
        longitude,
        address_name: address.name,
        address_thoroughfare: address.thoroughfare,
        address_sub_thoroughfare: address.subThoroughfare,
        address_sub_locality: address.subLocality,
        address_locality: address.locality,
        address_sub_administrative_area: address.subAdministrativeArea,
        address_administrative_area: address.administrativeArea,
        address_country: address.country,
        address_postal_code: address.postalCode,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'LOCATION_SET_LOCATION_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
      } else {
        dispatch({
          type: 'LOCATION_SET_LOCATION_FAILURE',
          error: parseError(response),
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'LOCATION_SET_LOCATION_FAILURE',
        error: parseError(error),
      })
    })
  }  
}
