import { apiAction } from './BasicActions'

export function list(credentials, currentUser, transaction, offset = 0) {
  return apiAction({
    prefix: 'MESSAGES_LIST',
    path: `/messages?transaction_id=${transaction.id}&offset=${offset}`,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { messages: JSON.parse(response._bodyText) }
    },
  })
}
