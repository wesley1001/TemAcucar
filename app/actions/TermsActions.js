import Config from "../Config"
import { authHeaders, authCredentials } from './AuthActions'
import { parseError } from './BasicActions'

export function termsAccept(user) {
  return dispatch => {
    dispatch({
      type: 'TERMS_ACCEPT_REQUEST',
      user,
    })
    fetch(`${Config.apiUrl}/users/${user.id}`, {
      method: 'patch',
      headers: authHeaders(user.credentials),
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
        return user
      } else {
        const error = parseError(response)
        dispatch({
          type: 'TERMS_ACCEPT_FAILURE',
          error,
        })
      }
    })
    .then((user) => authSetUser(dispatch, user))
    .catch(error => {
      dispatch({
        type: 'TERMS_ACCEPT_FAILURE',
        error,
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
