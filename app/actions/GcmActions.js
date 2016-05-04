export function register(token) {
  return dispatch => {
    dispatch({ type: 'GCM_REGISTER', token })
  }
}
