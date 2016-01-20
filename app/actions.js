import Config from "./Config"

export function fetchCurrentUser() {
  return dispatch => {
    // TODO fetch from iOS keychain or Android Keystore
    dispatch({
      type: 'RECEIVE_CURRENT_USER',
      user: {
        id: 23429,
        email: 'danielweinmann@gmail.com',
        password: 'danielweinmann',
      },
    })
  }
}

export function login(user) {
  return dispatch => {
    dispatch({ type: 'AUTH_LOGIN_REQUEST' })
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
      const json = JSON.parse(response._bodyText)
      if(response.ok) {
        const credentials = {
          accessToken: response.headers.get('access-token'),
          client: response.headers.get('client'),
          expiry: response.headers.get('expiry'),
          tokenType: response.headers.get('token-type'),
          uid: response.headers.get('uid'),
        }
        const user = json.data
        dispatch({
          type: 'AUTH_LOGIN_SUCCESS',
          user,
          credentials,
        })
        return response
      } else {
        dispatch({
          type: 'AUTH_LOGIN_FAILURE',
          json: json,
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'AUTH_LOGIN_ERROR',
        error: error,
      })
    })
  }  
}
