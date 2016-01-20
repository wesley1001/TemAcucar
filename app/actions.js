import Config from "./Config"

export function authFetchUser(currentUser) {
  return dispatch => {
    if (currentUser) 
      return
    dispatch({ type: 'AUTH_FETCH_USER_REQUEST' })
    // TODO fetch from iOS keychain or Android Keystore INSTEAD of setTimeout
    setTimeout(() => {
      // TODO dispatch something like this if have a saved current user
      dispatch({
        type: 'AUTH_FETCH_USER_SUCCESS',
        user: {
          id: 23429,
          email: 'danielweinmann@gmail.com',
          password: 'danielweinmann',
        },
      })
      // TODO dispatch this if we don't have a saved current user
      // dispatch({ type: 'AUTH_FETCH_USER_FAILURE' })
    }, 3000)
  }
}

export function authSignIn(user) {
  return dispatch => {
    dispatch({ type: 'AUTH_SIGN_IN_REQUEST' })
    fetch(`${Config.apiUrl}/auth/sign_in`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
    })
    .then(response => {
      if(response.ok) {
        const credentials = {
          accessToken: response.headers.get('access-token'),
          client: response.headers.get('client'),
          expiry: response.headers.get('expiry'),
          tokenType: response.headers.get('token-type'),
          uid: response.headers.get('uid'),
        }
        const json = JSON.parse(response._bodyText)
        const user = json.data
        dispatch({
          type: 'AUTH_SIGN_IN_SUCCESS',
          user,
          credentials,
        })
      } else {
        dispatch({
          type: 'AUTH_SIGN_IN_FAILURE',
          response,
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_SIGN_IN_ERROR',
        error,
        response,
      })
    })
  }  
}
