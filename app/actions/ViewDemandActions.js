export function mount(demand) {
  return dispatch => {
    dispatch({
      type: 'VIEW_DEMAND_MOUNT',
      demand,
    })
  }
}

export function unmount() {
  return dispatch => {
    dispatch({ type: 'VIEW_DEMAND_UNMOUNT' })
  }
}
