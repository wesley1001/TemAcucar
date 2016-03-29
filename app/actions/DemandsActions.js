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
