const initialState = {
  token: null,
}

export default function gcm(state = initialState, action) {
  switch (action.type) {
    case 'GCM_REGISTER':
      return {
        ...state, 
        token: action.token,
      }
    default:
      return state
  }
}
