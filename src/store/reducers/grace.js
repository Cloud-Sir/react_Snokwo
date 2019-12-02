import { handleActions } from "redux-actions"
import { directAsyncType, homeAsyncType } from "actions/grace/actionTypes"
const defaultState = {
    changshanglist: [],
    home_banners: [],
    home_boxes: [],
    home_groups: [],
    home_headlines: []

}



export default handleActions({
    [directAsyncType]: (state, action) => {
        let changshangState = JSON.parse(JSON.stringify(state))
        changshangState.changshanglist = action.payload.publishers_all
        return changshangState
    },
    [homeAsyncType]: (state, action) => {//首页
        let homeState = JSON.parse(JSON.stringify(state))
        homeState.home_banners = action.payload.banners
        homeState.home_boxes = action.payload.boxes
        homeState.home_groups = action.payload.groups
        homeState.home_headlines = action.payload.headlines
        console.log(homeState,123213)
        return homeState
    }
}, defaultState)