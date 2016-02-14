import React, { Platform } from 'react-native'

const initialState = {
  latitude: null,
  longitude: null,
  address: null,
  searchSet: false,
  search: null,
  searching: false,
  searchError: null,
  gettingCoordinates: false,
  getCoordinatesError: null,
  gettingAddress: false,
  getAddressError: null,
  settingLocation: false,
  setLocationError: null,
}

export default function location(state = initialState, action) {
  switch (action.type) {
    case 'LOCATION_GET_COORDINATES_REQUEST':
      return {
        ...state, 
        gettingCoordinates: true,
      }
    case 'LOCATION_GET_COORDINATES_SUCCESS':
      return {
        ...state, 
        latitude: action.latitude,
        longitude: action.longitude,
        gettingCoordinates: false,
        getCoordinatesError: null,
      }
    case 'LOCATION_GET_COORDINATES_FAILURE':
      return {
        ...state, 
        gettingCoordinates: false,
        getCoordinatesError: action.error,
      }
    case 'LOCATION_SET_COORDINATES':
      return {
        ...state, 
        latitude: action.latitude,
        longitude: action.longitude,
        gettingCoordinates: false,
        getCoordinatesError: null,
      }
    case 'LOCATION_GET_ADDRESS_REQUEST':
      return {
        ...state, 
        gettingAddress: true,
      }
    case 'LOCATION_GET_ADDRESS_SUCCESS':
      return {
        ...state, 
        address: action.address,
        gettingAddress: false,
        getAddressError: null,
      }
    case 'LOCATION_GET_ADDRESS_FAILURE':
      return {
        ...state, 
        gettingAddress: false,
        getAddressError: action.error,
      }
    case 'LOCATION_SET_SEARCH':
      return {
        ...state, 
        search: action.search,
        searchSet: true,
      }
    case 'LOCATION_SEARCH_REQUEST':
      return {
        ...state, 
        searching: true,
      }
    case 'LOCATION_SEARCH_SUCCESS':
      return {
        ...state, 
        address: action.address,
        latitude: action.latitude,
        longitude: action.longitude,
        searching: false,
        searchError: null,
      }
    case 'LOCATION_SEARCH_FAILURE':
      return {
        ...state, 
        searching: false,
        searchError: action.error,
      }
    case 'LOCATION_SET_LOCATION_REQUEST':
      return {
        ...state, 
        settingLocation: true,
      }
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return {
        ...state, 
        settingLocation: false,
        setLocationError: null,
      }
    case 'LOCATION_SET_LOCATION_FAILURE':
      return {
        ...state, 
        settingLocation: false,
        setLocationError: action.error,
      }
    default:
      return state
  }
}
