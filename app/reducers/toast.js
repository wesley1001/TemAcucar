const initialState = {
  show: false,
  type: null,
  message: null,
  duration: 3500,
}

const success = (message) => ({ show: true, type: "success", message })
const failure = (message) => ({ show: true, type: "failure", message: `Oops! ${message}. Por favor, tente novamente.` })
const tip = (message) => ({ show: true, type: "tip", message })
const networkError = failure("Ocorreu um erro ao acessar nosso servidor")

export default function toast(state = initialState, action) {
  switch (action.type) {
    case 'TOAST_SHOW':
      return initialState
    case 'AUTH_FACEBOOK_CONNECT_SUCCESS':
      return success("Pronto! Sua conta do Facebook foi conectada com sucesso :D")
    case 'AUTH_FACEBOOK_CONNECT_FAILURE':
      return failure("Ocorreu um erro ao conectar sua conta do Facebook")
    case 'TERMS_ACCEPT_FAILURE':
      return networkError
    case 'CONFIG_CONFIRM_EMAIL_FAILURE':
      return networkError
    case 'CONFIG_SHOW_TOAST':
      return tip("Falta pouco! Agora é só confirmar seu email e seu endereço :D")
    case 'LOCATION_GET_COORDINATES_FAILURE':
      return tip("Não foi possível detectar sua localização. Por favor, informe seu endereço.")
    case 'LOCATION_GET_ADDRESS_SUCCESS':
      return success("Descobrimos seu endereço pela sua localização. Por favor, confira antes de continuar.")
    case 'LOCATION_GET_ADDRESS_FAILURE':
      return tip("Não foi possível detectar sua localização. Por favor, informe seu endereço.")
    case 'LOCATION_SEARCH_SUCCESS':
      return success("Pronto! Verificamos seu endereço :D por favor, confira antes de continuar.")
    case 'LOCATION_SEARCH_FAILURE':
      return tip("Não foi possível encontrar seu endereço. Por favor, informe novamente.")
    case 'LOCATION_SET_LOCATION_FAILURE':
      return networkError
    case 'USERS_LIST_FAILURE':
      return failure("Não foi possível carregar o mapa com seus vizinhos")
    case 'DEMANDS_REFUSE_REQUEST':
      return success("Pronto! Já não vamos mais mostrar este pedido para você :D")
    case 'DEMANDS_FLAG_REQUEST':
      return success("Muito obrigado! Em breve nossos moderadores irão verificar o pedido :) enquanto isso, não vamos mostrá-lo para mais ninguém.")
    case 'DEMANDS_CREATE_SUCCESS':
      return success("Vamos perguntar para seus vizinhos e você será notificado assim que responderem :D")
    case 'DEMANDS_COMPLETE_SUCCESS':
      return success("Pedido concluido com sucesso! :D")
    case 'DEMANDS_COMPLETE_FAILURE':
      return failure("Não foi possível concluir este pedido")
    case 'DEMANDS_CANCEL_SUCCESS':
      return success("Pedido cancelado com sucesso! :D")
    case 'DEMANDS_CANCEL_FAILURE':
      return failure("Não foi possível cancelar este pedido")
    case 'DEMANDS_REACTIVATE_SUCCESS':
      return success("Pedido reativado com sucesso! :D")
    case 'DEMANDS_REACTIVATE_FAILURE':
      return failure("Não foi possível reativar este pedido")
    case 'TRANSACTIONS_CREATE_FAILURE':
      return failure("Não foi possível criar sua transação")
    case 'MESSAGES_LIST_FAILURE':
      return failure("Não foi possível carregar suas mensagens")
    case 'MESSAGES_CREATE_FAILURE':
      return failure("Não foi possível enviar sua mensagem")
    case 'REVIEWS_LIST_FAILURE':
      return failure("Não foi possível carregar as avaliações")
    case 'REVIEWS_CREATE_SUCCESS':
      return success("Sua avaliação foi criada com sucesso! :D")
    default:
      return state
  }
}
