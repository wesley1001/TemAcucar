import { apiAction } from './BasicActions'

export function openDrawer() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_OPEN_DRAWER' })
  }
}

export function closeDrawer() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_CLOSE_DRAWER' })
  }
}

export function signOut() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_SIGN_OUT' })
  }
}
