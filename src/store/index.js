import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import readuxThunk from "redux-thunk"
import cloud from "./reducers/cloud";

const reducers = combineReducers({
    cloud
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(readuxThunk)))

export default store;