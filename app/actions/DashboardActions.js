import { apiAction } from './BasicActions'

export function listDemands(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'DASHBOARD_LIST_DEMANDS',
    path: '/demands?filter=neighborhood&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demands: JSON.parse(response._bodyText) }
    },
  })
}

export function refuseDemand(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DASHBOARD_REFUSE_DEMAND',
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
    prefix: 'DASHBOARD_FLAG_DEMAND',
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

export function createDemand(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DASHBOARD_CREATE_DEMAND',
    path: '/demands',
    method: 'post',
    params: {
      name: demand.name,
      description: demand.description,
    },
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demand: JSON.parse(response._bodyText) }
    },
  })
}

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
