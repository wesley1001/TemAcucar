import { apiAction } from './BasicActions'

export function usersList(credentials, currentUser) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_USERS_LIST',
    path: '/users',
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { users: JSON.parse(response._bodyText) }
    },
  })
}

export function demandsList(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_DEMANDS_LIST',
    path: '/demands?offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demands: JSON.parse(response._bodyText) }
    },
  })
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
