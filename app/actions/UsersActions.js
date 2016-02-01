import Config from "../Config"
import { authHeaders, authCredentials } from './AuthActions'
import { parseError } from './BasicActions'

export function usersConfirmEmail(credentials) {
  return dispatch => {
    dispatch({ type: 'USERS_CONFIRM_EMAIL_REQUEST' })
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
          type: 'USERS_CONFIRM_EMAIL_SUCCESS',
          currentUser: JSON.parse(response._bodyText),
          credentials: authCredentials(response),
        })
      } else {
        dispatch({
          type: 'USERS_CONFIRM_EMAIL_FAILURE',
          error: parseError(response),
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'USERS_CONFIRM_EMAIL_FAILURE',
        error: parseError(error),
      })
    })
  }  
}
