import React, { Platform } from 'react-native'
import RNGeocoder from 'react-native-geocoder'
import { updateCurrentUser } from './BasicActions'

function processAddress(address) {
  if (Platform.OS === 'ios') {
    return address
  }
  return {
    name: `${address.thoroughfare}, ${address.subThoroughfare}`,
    thoroughfare: address.thoroughfare,
    subThoroughfare: address.subThoroughfare,
    complement: address.complement,
    subLocality: address.subLocality,
    locality: address.locality,
    subAdministrativeArea: address.subAdminArea,
    administrativeArea: address.adminArea,
    country: address.country,
    postalCode: address.postalCode,
  }
}

function addressSearch(address) {
  return `${ address.thoroughfare }${ (address.subThoroughfare ? `, ${ address.subThoroughfare }` : '') }${ (address.subLocality ? ` - ${ address.subLocality }` : '') }${ (address.locality ? ` - ${ address.locality }` : '') }${ (address.administrativeArea ? ` - ${ address.administrativeArea }` : '') }${ address.country ? `, ${address.country}` : '' }`
}

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
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 20000}
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

export function locationGetAddress(latitude, longitude, complement) {
  return dispatch => {
    if (!(latitude && longitude)) {
      return dispatch({
        type: 'LOCATION_GET_ADDRESS_FAILURE',
        error: {id: 'no_coordinates', message: 'Tried to get address without coordinates'},
      })
    }
    dispatch({ type: 'LOCATION_GET_ADDRESS_REQUEST' })
    RNGeocoder.reverseGeocodeLocation({latitude, longitude}, (error, data) => {
      const address = data && data[0]
      if(!error && address) { 
        dispatch({
          type: 'LOCATION_GET_ADDRESS_SUCCESS',
          address: processAddress({
            complement,
            ...address,
          }),
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

export function locationSearch(searchAddress, initializeForm) {
  return dispatch => {
    const search = addressSearch(searchAddress)
    dispatch({
      type: 'LOCATION_SEARCH_REQUEST',
      search,
    })
    RNGeocoder.geocodeAddress(search, (error, data) => {
      const address = data && data[0]
      if(!error && address) { 
        const processedAddress = processAddress({
          complement: searchAddress.complement,
          ...address,
        })
        initializeForm(processedAddress)
        dispatch({
          type: 'LOCATION_SEARCH_SUCCESS',
          address: processedAddress,
          latitude: address.position.lat,
          longitude: address.position.lng,
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
  const { latitude, longitude, address } = location
  return updateCurrentUser('LOCATION_SET_LOCATION', credentials, {
    reviewed_location: true,
    latitude,
    longitude,
    address_name: address.name,
    address_thoroughfare: address.thoroughfare,
    address_sub_thoroughfare: address.subThoroughfare,
    address_complement: address.complement,
    address_sub_locality: address.subLocality,
    address_locality: address.locality,
    address_sub_administrative_area: address.subAdministrativeArea,
    address_administrative_area: address.administrativeArea,
    address_country: address.country,
    address_postal_code: address.postalCode,
  })
}
