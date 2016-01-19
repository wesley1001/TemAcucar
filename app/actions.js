import Config from "./Config"

export function fetchCurrentUser() {
  return dispatch => {
    // TODO fetch from iOS keychain or Android Keystore
    dispatch(receiveCurrentUser({
      id: 23429,
      email: 'danielweinmann@gmail.com',
      password: 'teste',
    }))
  }
}

function receiveCurrentUser(user) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    user,
  }
}

export function login(email, password) {
  return dispatch => {
    console.log(`${Config.apiUrl}/auth/sign_in`)
    dispatch({ type: 'AUTH_LOGIN_REQUEST' })
    fetch(`${Config.apiUrl}/auth/sign_in`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: 'AUTH_LOGIN_SUCCESS',
          response,
        })
      } else {
        dispatch({
          type: 'AUTH_LOGIN_FAILURE',
          response,
        })
      }
    })
  }  
}
