import Config from "../Config"
import { updateCurrentUser } from './BasicActions'

export function termsAccept(credentials) {
  return updateCurrentUser('TERMS_ACCEPT', credentials, {
    accepted_terms: true,
  })
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
