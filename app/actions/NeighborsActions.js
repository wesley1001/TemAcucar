import { apiAction } from './BasicActions'

export function list(credentials, currentUser) {
  return apiAction({
    prefix: 'NEIGHBORS_LIST',
    path: '/users',
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { users: JSON.parse(response._bodyText) }
    },
  })
}
