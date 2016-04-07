import { apiAction } from './BasicActions'

export function list(credentials, currentUser) {
  return apiAction({
    prefix: 'UNREAD_NOTIFICATIONS_LIST',
    path: '/notifications?filter=unread',
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { list: JSON.parse(response._bodyText) }
    },
  })
}

export function readAll(credentials, currentUser) {
  return apiAction({
    prefix: 'UNREAD_NOTIFICATIONS_READ_ALL',
    path: '/notifications/read-all',
    method: 'put',
    credentials,
    currentUser: () => currentUser,
  })
}
