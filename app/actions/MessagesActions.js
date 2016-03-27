import { apiAction } from './BasicActions'

export function create(credentials, currentUser, message) {
  return apiAction({
    prefix: 'MESSAGES_CREATE',
    path: '/messages',
    method: 'post',
    params: {
      transaction_id: message.transaction_id,
      text: message.text,
    },
    requestAttributes: { message },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { message: JSON.parse(response._bodyText) }
    },
  })
}

export function list(credentials, currentUser, transaction, offset = 0) {
  return apiAction({
    prefix: 'MESSAGES_LIST',
    path: `/messages?transaction_id=${transaction.id}&offset=${offset}`,
    credentials,
    requestAttributes: { transaction, offset },
    currentUser: () => currentUser,
    processResponse: (response) => {
      return { messages: JSON.parse(response._bodyText) }
    },
  })
}
