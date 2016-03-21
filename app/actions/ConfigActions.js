import { updateCurrentUser } from './BasicActions'

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
