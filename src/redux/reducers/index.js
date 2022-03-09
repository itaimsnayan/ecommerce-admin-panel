import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";

export const allReducers = combineReducers({
    location: locationReducer
})