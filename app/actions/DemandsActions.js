import { apiAction } from './BasicActions'

export function list(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'DEMANDS_LIST',
    path: '/demands?filter=neighborhood&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { list: JSON.parse(response._bodyText) }
    },
  })
}

export function refuse(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_REFUSE',
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

export function flag(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_FLAG',
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

export function create(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_CREATE',
    path: '/demands',
    method: 'post',
    params: {
      radius: parseFloat(parseInt(demand.radius) / 1000),
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

export function complete(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_COMPLETE',
    path: `/demands/${demand.id}/complete`,
    method: 'put',
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demand: JSON.parse(response._bodyText) }
    },
  })
}

export function cancel(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_CANCEL',
    path: `/demands/${demand.id}/cancel`,
    method: 'put',
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demand: JSON.parse(response._bodyText) }
    },
  })
}

export function reactivate(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'DEMANDS_REACTIVATE',
    path: `/demands/${demand.id}/reactivate`,
    method: 'put',
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demand: JSON.parse(response._bodyText) }
    },
  })
}
