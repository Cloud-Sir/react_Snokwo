import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import readuxThunk from "redux-thunk"
import cloud from "./reducers/cloud";
import grace from "./reducers/grace";

const reducers = combineReducers({
    cloud,
    grace
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(readuxThunk)))

export default store;