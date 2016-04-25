const initialState = {
  message: null,
  type: null,
  show: false,
}

export default function toast(state = initialState, action) {
  switch (action.type) {
    case 'TOAST_SHOW':
      return initialState
    case 'DEMANDS_REFUSE_REQUEST':
      return {
        ...state, 
        show: true,
        message: "Pronto! Já não vamos mais mostrar este pedido para você :D",
      }
    default:
      return state
  }
}
