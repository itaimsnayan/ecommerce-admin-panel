const updateLocationAction = (pathname) => (dispatch) => {
    dispatch({type: "UPDATE_LOCATION_ACTION", payload: pathname})
}

export { updateLocationAction }