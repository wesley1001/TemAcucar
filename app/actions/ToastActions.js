import Toast from 'react-native-root-toast'
import Colors from "../Colors"

export function show(message, type, duration = 3500) {
  return dispatch => {
    dispatch({ type: 'TOAST_SHOW' })
    const color = (
      type === "success" ? Colors.green : (
        type === "failure" ? Colors.red : Colors.ice
      )
    )
    Toast.show(message, {
      duration: duration,
      backgroundColor: color,
      shadowColor: 'rgba(0,0,0,0.5)',
      opacity: 1,
    })
  }
}
