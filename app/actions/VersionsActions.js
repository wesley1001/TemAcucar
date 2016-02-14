import React, { Platform } from 'react-native'
import { apiAction } from './BasicActions'

export function versionsList() {
  return apiAction({
    prefix: 'VERSIONS_LIST',
    path: `/versions?platform=${Platform.OS}`,
    currentUser: () => null,
    processResponse: (response) => {
      return { list: JSON.parse(response._bodyText) }
    },
  })
}

export function versionsIgnoreUpdate() {
  return dispatch => {
    dispatch({ type: 'VERSIONS_IGNORE_UPDATE' })
  }
}
