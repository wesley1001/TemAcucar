import Config from "../Config"
import { updateCurrentUser } from './BasicActions'

export function termsAccept(auth) {
  return updateCurrentUser('TERMS_ACCEPT', auth, {
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
