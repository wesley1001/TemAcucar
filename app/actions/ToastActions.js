import Toast from 'react-native-root-toast'
import Colors from "../Colors"

export function show(message, type = "success") {
  return dispatch => {
    dispatch({ type: 'TOAST_SHOW' })
    Toast.show(message, {
      duration: Toast.durations.LONG,
      backgroundColor: (type === "success" ? Colors.green : Colors.red),
      shadowColor: 'rgba(0,0,0,0.5)',
      opacity: 1,
    })
  }
}
