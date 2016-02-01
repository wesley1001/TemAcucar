import Config from "../Config"
import { parseError } from './BasicActions'

export function versionsList() {
  return dispatch => {
    dispatch({ type: 'VERSIONS_LIST_REQUEST' })
    fetch(`${Config.apiUrl}/versions`, {
      method: 'get',
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'VERSIONS_LIST_SUCCESS',
          list: JSON.parse(response._bodyText),
        })
      } else {
        const error = parseError(response)
        dispatch({
          type: 'VERSIONS_LIST_FAILURE',
          error,
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'VERSIONS_LIST_FAILURE',
        error,
      })
    })
  }  
}

export function versionsIgnoreUpdate() {
  return dispatch => {
    dispatch({ type: 'VERSIONS_IGNORE_UPDATE' })
  }
}
