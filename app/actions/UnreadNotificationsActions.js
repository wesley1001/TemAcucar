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
