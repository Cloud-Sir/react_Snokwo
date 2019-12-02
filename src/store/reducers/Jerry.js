import { AroundTypes,AroundDataTypes} from "actions/Jerry/actionTypes.js"
import { handleActions } from "redux-actions"
const defaultState = {
    list: [],
    data:[]
}
export default handleActions({
    [AroundTypes]: (state, action) => {
        let aroundState = JSON.parse(JSON.stringify(state));
        aroundState.list = action.payload;
        return aroundState;
    },
    [AroundDataTypes]: (state, action) => {
        let aroundState = JSON.parse(JSON.stringify(state));
        aroundState.data = action.payload;
        return aroundState;
    }
},defaultState)
