import SimpleStore from 'react-native-simple-store'
import { parseError } from './BasicActions'

export function get(currentUser) {
  return dispatch => {
    if (currentUser) 
      return
    dispatch({ type: 'STORED_AUTH_GET_REQUEST' })
    SimpleStore.get('storedAuth')
    .then((auth) => {
      if (auth) {
        dispatch({
          type: 'STORED_AUTH_GET_SUCCESS',
          credentials: auth.credentials,
          currentUser: auth.currentUser,
        })
      } else {
        dispatch({
          type: 'STORED_AUTH_GET_FAILURE',
          error: {
            id: 'no_stored_credentials',
            message: 'Could not find stored credentials.',
          },
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'STORED_AUTH_GET_FAILURE',
        error: parseError(error),
      })
    })
  }
}

export function set(dispatch, credentials, currentUser) {
  if (credentials && currentUser) {
    dispatch({ type: 'STORED_AUTH_SET_REQUEST' })
    SimpleStore.save('storedAuth', { credentials, currentUser })
    .then(() => {
      dispatch({ type: 'STORED_AUTH_SET_SUCCESS' })
    })
    .catch(error => {
      dispatch({
        type: 'STORED_AUTH_SET_FAILURE',
        error: parseError(error),
      })
    })
  }
}

export function reset(dispatch) {
  dispatch({ type: 'STORED_AUTH_RESET_REQUEST'})
  SimpleStore.delete('storedAuth')
  .then(() => dispatch({ type: 'STORED_AUTH_RESET_SUCCESS' }))
  .catch(error => {
    dispatch({
      type: 'STORED_AUTH_RESET_FAILURE',
      error: parseError(error),
    })
  })
}
