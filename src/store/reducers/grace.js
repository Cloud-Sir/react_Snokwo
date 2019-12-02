import { handleActions } from "redux-actions"
import { directAsyncType, homeAsyncType, activityAsyncType, gamedetailAsyncType } from "actions/grace/actionTypes"
const defaultState = {
    changshanglist: [],
    home_banners: [],
    home_boxes: [],
    home_groups: [],
    home_headlines: [],
    activity_list: [],
    gamedetail_list: {},
    game_list: []
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
        // console.log(action, 123213)
        return homeState
    },
    [activityAsyncType]: (state, action) => {
        let activityState = JSON.parse(JSON.stringify(state))
        activityState.activity_list = action.payload.banners
        return activityState
    },
    [gamedetailAsyncType]: (state, action) => {
        let gamedetailState = JSON.parse(JSON.stringify(state))
        console.log(action)
        gamedetailState.gamedetail_list = action.payload
        gamedetailState.game_list = action.payload.skus[0]
        return gamedetailState
    },
}, defaultState)