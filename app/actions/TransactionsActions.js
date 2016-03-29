import { apiAction } from './BasicActions'

export function list(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'TRANSACTIONS_LIST',
    path: '/demands?filter=transactions&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { list: JSON.parse(response._bodyText) }
    },
  })
}

export function create(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'TRANSACTIONS_CREATE',
    path: '/transactions',
    method: 'post',
    params: {
      demand_id: demand.id,
    },
    requestAttributes: { demand },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { transaction: JSON.parse(response._bodyText) }
    },
  })
}
