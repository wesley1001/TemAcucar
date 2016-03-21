import { updateCurrentUser } from './BasicActions'

export function accept(credentials) {
  return updateCurrentUser('TERMS_ACCEPT', credentials, {
    accepted_terms: true,
  })
}

export function reject() {
  return dispatch => {
    dispatch({ type: 'TERMS_REJECT' })
  }
}

export function cancelReject() {
  return dispatch => {
    dispatch({ type: 'TERMS_CANCEL_REJECT' })
  }
}

export function scrollToBottom() {
  return dispatch => {
    dispatch({ type: 'TERMS_SCROLL_TO_BOTTOM' })
  }
}
