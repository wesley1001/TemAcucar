import { updateCurrentUser } from './BasicActions'

export function register(token) {
  return dispatch => {
    dispatch({ type: 'GCM_REGISTER', token })
  }
}

export function store(credentials, token) {
  return updateCurrentUser('GCM_STORE', credentials, {
    gcm_token: token,
  })
}

export function notify(notification) {
  return dispatch => {
    dispatch({ type: 'GCM_NOTIFY', notification })
  }
}
