import { apiAction } from './BasicActions'

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

export function listDemands(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'TRANSACTIONS_LIST_DEMANDS',
    path: '/demands?filter=transactions&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demands: JSON.parse(response._bodyText) }
    },
  })
}

export function listTransactions(credentials, currentUser, demand) {
  return apiAction({
    prefix: 'TRANSACTIONS_LIST_TRANSACTIONS',
    path: '/transactions?demand_id=' + demand.id,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { transactions: JSON.parse(response._bodyText) }
    },
  })
}
