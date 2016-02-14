import keyFilter from 'object-key-filter'
import Config from "../Config"
import { authHeaders, authCredentials, authSetStoredAuth } from './AuthActions'

export function parseError(error) {
  if (error instanceof Error) {
    return {
      id: error.name,
      message: error.message,
    }
  }
  const response = error
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.match(/application\/json/)) {
    return JSON.parse(response._bodyText)
  } else {
    return {
      id: `${response.status}`,
      message: response._bodyText,
    }
  }
}

export function updateCurrentUser(prefix, auth, user) {
  const { credentials, currentUser } = auth
  return apiAction({
    prefix,
    path: `/users/${credentials.uid}`,
    method: 'put',
    params: user,
    credentials,
    currentUser: (response) => {
      return JSON.parse(response._bodyText)
    },
    processResponse: (response) => {
      return { currentUser: JSON.parse(response._bodyText) }
    },
  })
}

export function apiAction(options) {
  return dispatch => apiDispatchAction(dispatch, options)
}

export function apiDispatchAction(dispatch, options) {
  const { prefix, path, credentials, currentUser, method, params, requestAttributes, processResponse, afterAction } = options
  dispatch({
    type: `${prefix}_REQUEST`,
    ...requestAttributes,
  })
  let fetchOptions = { method: (method ? method : 'get') }
  if (credentials) {
    fetchOptions.headers = authHeaders(credentials)
  } else {
    fetchOptions.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }      
  }
  if (params) {
    fetchOptions.body = JSON.stringify(params)
  }
  fetch(`${Config.apiUrl}${path}`, fetchOptions)
  .then(response => {
    if(response.ok) {
      const newCredentials = authCredentials(response)
      dispatch({
        type: `${prefix}_SUCCESS`,
        credentials: newCredentials,
        ...(processResponse && processResponse(response)),
      })
      if (newCredentials.accessToken) {
        authSetStoredAuth(dispatch, newCredentials, keyFilter(currentUser(response), ['password', 'facebook']))
      }
    } else {
      dispatch({
        type: `${prefix}_FAILURE`,
        error: parseError(response),
      })
    }
    return response
  })
  .then((response) => {
    afterAction && afterAction(dispatch, response)
  })
  .catch(error => {
    dispatch({
      type: `${prefix}_FAILURE`,
      error: parseError(error),
    })
  })
}
