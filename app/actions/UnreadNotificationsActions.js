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

export function read(credentials, currentUser, notification) {
  return apiAction({
    prefix: 'UNREAD_NOTIFICATIONS_READ',
    path: '/notifications/read-all',
    method: 'put',
    requestAttributes: { notification },
    credentials,
    currentUser: () => currentUser,
  })
}

export function readAll(credentials, currentUser, list) {
  return apiAction({
    prefix: 'UNREAD_NOTIFICATIONS_READ_ALL',
    path: '/notifications/read-all',
    method: 'put',
    requestAttributes: { list },
    credentials,
    currentUser: () => currentUser,
  })
}
