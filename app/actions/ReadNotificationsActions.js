import { apiAction } from './BasicActions'

export function list(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'READ_NOTIFICATIONS_LIST',
    path: '/notifications?filter=read&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { list: JSON.parse(response._bodyText) }
    },
  })
}
