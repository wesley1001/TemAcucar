import Config from "../Config"
import { authHeaders, authCredentials, authSetUser } from './AuthActions'
import { parseError } from './BasicActions'

export function configConfirmEmail(credentials) {
  return dispatch => {
    dispatch({ type: 'CONFIG_CONFIRM_EMAIL_REQUEST' })
    fetch(`${Config.apiUrl}/users/${credentials.uid}`, {
      method: 'patch',
      headers: authHeaders(credentials),
      body: JSON.stringify({
        reviewed_email: true,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'CONFIG_CONFIRM_EMAIL_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
      } else {
        dispatch({
          type: 'CONFIG_CONFIRM_EMAIL_FAILURE',
          error: parseError(response),
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'CONFIG_CONFIRM_EMAIL_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function configUpdateEmail(email, secondaryEmail, credentials, password) {
  return dispatch => {
    dispatch({ type: 'CONFIG_UPDATE_EMAIL_REQUEST' })
    fetch(`${Config.apiUrl}/users/${credentials.uid}`, {
      method: 'patch',
      headers: authHeaders(credentials),
      body: JSON.stringify({
        email,
        secondary_email: secondaryEmail,
        reviewed_email: true,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'CONFIG_UPDATE_EMAIL_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
        return true
      } else {
        dispatch({
          type: 'CONFIG_UPDATE_EMAIL_FAILURE',
          error: parseError(response),
        })
      }
    })
    .then((shouldSetUser) => {
      if (shouldSetUser)
        authSetUser(dispatch, {email, password})
    })
    .catch(error => {
      dispatch({
        type: 'CONFIG_UPDATE_EMAIL_FAILURE',
        error: parseError(error),
      })
    })
  }  
}
