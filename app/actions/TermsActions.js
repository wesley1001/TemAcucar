import Config from "../Config"
import { authHeaders, authCredentials } from './AuthActions'
import { parseError } from './BasicActions'

export function termsAccept(credentials) {
  return dispatch => {
    dispatch({ type: 'TERMS_ACCEPT_REQUEST' })
    fetch(`${Config.apiUrl}/users/${credentials.uid}`, {
      method: 'patch',
      headers: authHeaders(credentials),
      body: JSON.stringify({
        accepted_terms: true,
      })
    })
    .then(response => {
      if(response.ok) {
        const credentials = authCredentials(response)
        dispatch({
          type: 'TERMS_ACCEPT_SUCCESS',
          user: JSON.parse(response._bodyText),
          credentials,
        })
      } else {
        dispatch({
          type: 'TERMS_ACCEPT_FAILURE',
          error: parseError(response),
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'TERMS_ACCEPT_FAILURE',
        error: parseError(error),
      })
    })
  }  
}

export function termsReject() {
  return dispatch => {
    dispatch({ type: 'TERMS_REJECT' })
  }
}

export function termsCancelReject() {
  return dispatch => {
    dispatch({ type: 'TERMS_CANCEL_REJECT' })
  }
}

export function termsScrollToBottom() {
  return dispatch => {
    dispatch({ type: 'TERMS_SCROLL_TO_BOTTOM' })
  }
}
