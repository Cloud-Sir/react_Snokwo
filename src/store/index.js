import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import readuxThunk from "redux-thunk"
import cloud from "./reducers/cloud";
import grace from "./reducers/grace";
import Jerry from "./reducers/Jerry"

const reducers = combineReducers({
    cloud,
    grace,
    Jerry
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(readuxThunk)))

export default store;