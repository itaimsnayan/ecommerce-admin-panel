import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { allReducers } from "./reducers";


// const store = createStore(reducers) 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    {},
    composeEnhancer(applyMiddleware(thunk))
);


export { store };