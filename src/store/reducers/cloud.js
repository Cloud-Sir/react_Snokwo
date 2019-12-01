import { handleActions } from "redux-actions"
import { headLineType} from "actions/cloud/cloudActionTypes"
 
const defaultState = {
    headline_data : []
}


export default handleActions({
    [headLineType]: (state, action) => {
        let headlineState = JSON.parse(JSON.stringify(state));
        headlineState.headline_data = action.payload
        return headlineState
    }
}, defaultState)