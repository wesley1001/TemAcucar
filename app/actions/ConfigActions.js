import { updateCurrentUser } from './BasicActions'

export function showToast() {
  return dispatch => {
    dispatch({ type: 'CONFIG_SHOW_TOAST' })
  }
}

export function confirmEmail(credentials) {
  return updateCurrentUser('CONFIG_CONFIRM_EMAIL', credentials, {
    reviewed_email: true,
  })
}

export function updateEmail(email, secondaryEmail, credentials) {
  return updateCurrentUser('CONFIG_UPDATE_EMAIL', credentials, {
    email,
    secondary_email: secondaryEmail,
    reviewed_email: true,
  })
}
