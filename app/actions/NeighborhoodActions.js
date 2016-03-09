import { updateCurrentUser } from './BasicActions'

export function storeDelta(delta, credentials) {
  return updateCurrentUser('NEIGHBORHOOD_STORE_DELTA', credentials, {
    delta,
  })
}

export function setDelta(delta) {
  return dispatch => {
    dispatch({
      type: 'NEIGHBORHOOD_SET_DELTA',
      delta,
    })
  }
}

export function openDrawer() {
  return dispatch => {
    dispatch({ type: 'NEIGHBORHOOD_OPEN_DRAWER' })
  }
}

export function closeDrawer() {
  return dispatch => {
    dispatch({ type: 'NEIGHBORHOOD_CLOSE_DRAWER' })
  }
}
