import { updateCurrentUser } from './BasicActions'

export function configConfirmEmail(credentials) {
  return updateCurrentUser('CONFIG_CONFIRM_EMAIL', credentials, {
    reviewed_email: true,
  })
}

export function configUpdateEmail(email, secondaryEmail, credentials) {
  return updateCurrentUser('CONFIG_UPDATE_EMAIL', credentials, {
    email,
    secondary_email: secondaryEmail,
    reviewed_email: true,
  })
}
