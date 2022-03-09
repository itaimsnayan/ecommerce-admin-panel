const locationReducer = (state = "", action) => {
    const { type, payload } = action; 
    switch (type) {
        case "UPDATE_LOCATION_ACTION":
            return payload;
        default:
            return state;
    }

}

export { locationReducer };