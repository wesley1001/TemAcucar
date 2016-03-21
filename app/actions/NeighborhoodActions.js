import { apiAction } from './BasicActions'

export function listUsers(credentials, currentUser) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_LIST_USERS',
    path: '/users',
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { users: JSON.parse(response._bodyText) }
    },
  })
}

export function listDemands(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_LIST_DEMANDS',
    path: '/demands?offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demands: JSON.parse(response._bodyText) }
    },
  })
}

export function refuseDemand(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_REFUSE_DEMAND',
    path: '/refusals',
    method: 'post',
    params: {
      demand_id: demand.id,
    },
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
  })
}

export function flagDemand(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'NEIGHBORHOOD_FLAG_DEMAND',
    path: '/flags',
    method: 'post',
    params: {
      demand_id: demand.id,
    },
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
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
