import { handleActions } from "redux-actions"
import { directAsyncType, homeAsyncType, activityAsyncType, gamedetailAsyncType, homelistAsyncType } from "actions/grace/actionTypes"
const defaultState = {
    changshanglist: [],
    home_banners: [],
    home_boxes: [],
    home_groups: [],
    home_headlines: [],
    activity_list: [],
    gamedetail_list: {},
    game_list: [],
    home_new_list: [],
    home_promotion_list: [],
    home_advanceSale_list: [],
    home_week_list: [],
    home_mouth_list: [],
    home_newprice_list: [],
    home_promotionprice_list: [],
    home_advanceSaleprice_list: [],
    home_weekprice_list: [],
    home_mouthprice_list: [],
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
        // console.log(action)
        gamedetailState.gamedetail_list = action.payload
        gamedetailState.game_list = action.payload.skus[0]
        return gamedetailState
    },
    [homelistAsyncType]: (state, action) => {
        let homelistState = JSON.parse(JSON.stringify(state))
        homelistState.home_new_list = action.payload.homelistzuixin
        homelistState.home_promotion_list = action.payload.homelistcuxiao
        homelistState.home_advanceSale_list = action.payload.homelistyushou
        homelistState.home_week_list = action.payload.homelistweek
        homelistState.home_mouth_list = action.payload.homelistmouth


        homelistState.home_newprice_list = action.payload.homelistzuixinprices
        homelistState.home_promotionprice_list = action.payload.homelistcuxiaoprices
        homelistState.home_advanceSaleprice_list = action.payload.homelistyushouprices
        homelistState.home_weekprice_list = action.payload.homelistweekprices
        homelistState.home_mouthprice_list = action.payload.homelistmouthprices
        return homelistState
    }
}, defaultState)