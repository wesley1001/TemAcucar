import { apiAction } from './BasicActions'

export function list(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'TRANSACTION_DEMANDS_LIST',
    path: '/demands?filter=transactions&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { demands: JSON.parse(response._bodyText) }
    },
  })
}
