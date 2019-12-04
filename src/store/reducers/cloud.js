import { handleActions } from "redux-actions"
import { headLineType, headfiveType, acticleType, whatType, hotType, lefttagsType, righttagsType} from "actions/cloud/cloudActionTypes"
 
const defaultState = {
    headline_data: [],
    headline_five: [],
    article_detail: [],
    what_info: [],
    hot_list: [],
    left_tags: [],
    right_tags:[]
}


export default handleActions({
    [headLineType]: (state, action) => {
        let headlineState = JSON.parse(JSON.stringify(state));
        headlineState.headline_data = action.payload;
        return headlineState;
    },
    [headfiveType]: (state, action) => {
        let headfiveState = JSON.parse(JSON.stringify(state));
         headfiveState.headline_five = action.payload;
        return headfiveState;
    },
    [acticleType]: (state, action) => {
        let articleDetailState = JSON.parse(JSON.stringify(state));
        articleDetailState.article_detail = action.payload;
        return articleDetailState;
    },
    [whatType]: (state, action) => {
        let whatState = JSON.parse(JSON.stringify(state));
        whatState.what_info = action.payload;
        return whatState
    },
    [hotType]: (state, action) => {
        let hotpasteState = JSON.parse(JSON.stringify(state));
        hotpasteState.hot_list = action.payload;
        return hotpasteState;
    },
    [lefttagsType]: (state, action) => {
        let leftState = JSON.parse(JSON.stringify(state));
        leftState.left_tags = action.payload;
        return leftState;
    },
    [righttagsType]: (state, action) => {
        let rightState = JSON.parse(JSON.stringify(state));
        rightState.right_tags = action.payload;
        return rightState;
    }
}, defaultState)