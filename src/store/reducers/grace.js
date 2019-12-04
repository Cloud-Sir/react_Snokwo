import { handleActions } from "redux-actions"
import {
    directAsyncType,
    homeAsyncType,
    activityAsyncType,
    gamedetailAsyncType,
    homelistAsyncType,
    searChangeType,
    searchAsyncType,
    searRemoveType,
    PriceSortType
} from "actions/grace/actionTypes"
const defaultState = {
    changshanglist: JSON.parse(sessionStorage.getItem('changshanglist')) || [],
    activity_list: JSON.parse(sessionStorage.getItem('activity_list')) || [],
    home_banners: JSON.parse(sessionStorage.getItem('home_banners')) || [],
    home_boxes: JSON.parse(sessionStorage.getItem('home_boxes')) || [],
    home_groups: JSON.parse(sessionStorage.getItem('home_groups')) || [],
    home_headlines: JSON.parse(sessionStorage.getItem('home_headlines')) || [],
    gamedetail_list: {},
    game_list: [],
    home_new_list: JSON.parse(sessionStorage.getItem('home_new_list')) || [],
    home_promotion_list: JSON.parse(sessionStorage.getItem('home_promotion_list')) || [],
    home_advanceSale_list: JSON.parse(sessionStorage.getItem('home_advanceSale_list')) || [],
    home_week_list: JSON.parse(sessionStorage.getItem('home_week_list')) || [],
    home_mouth_list: JSON.parse(sessionStorage.getItem('home_mouth_list')) || [],
    home_newprice_list: JSON.parse(sessionStorage.getItem('home_newprice_list')) || [],
    home_promotionprice_list: JSON.parse(sessionStorage.getItem('home_promotionprice_list')) || [],
    home_advanceSaleprice_list: JSON.parse(sessionStorage.getItem('home_advanceSaleprice_list')) || [],
    home_weekprice_list: JSON.parse(sessionStorage.getItem('home_weekprice_list')) || [],
    home_mouthprice_list: JSON.parse(sessionStorage.getItem('home_mouthprice_list')) || [],
    searchval: "",
    searchList: [],

}



export default handleActions({
    [directAsyncType]: (state, action) => {
        let changshangState = JSON.parse(JSON.stringify(state))
        sessionStorage.setItem('changshanglist', JSON.stringify(action.payload.publishers_all));
        changshangState.changshanglist = action.payload.publishers_all
        return changshangState
    },
    [homeAsyncType]: (state, action) => {//首页
        let homeState = JSON.parse(JSON.stringify(state))
        sessionStorage.setItem('home_banners', JSON.stringify(action.payload.banners));
        sessionStorage.setItem('home_boxes', JSON.stringify(action.payload.boxes));
        sessionStorage.setItem('home_groups', JSON.stringify(action.payload.groups));
        sessionStorage.setItem('home_headlines', JSON.stringify(action.payload.headlines));
        homeState.home_banners = action.payload.banners
        homeState.home_boxes = action.payload.boxes
        homeState.home_groups = action.payload.groups
        homeState.home_headlines = action.payload.headlines
        return homeState
    },
    [activityAsyncType]: (state, action) => {
        let activityState = JSON.parse(JSON.stringify(state))
        sessionStorage.setItem('activity_list', JSON.stringify(action.payload.banners));
        activityState.activity_list = action.payload.banners
        return activityState
    },
    [gamedetailAsyncType]: (state, action) => {
        let gamedetailState = JSON.parse(JSON.stringify(state))
        gamedetailState.gamedetail_list = action.payload
        gamedetailState.game_list = action.payload.skus[0]
        return gamedetailState
    },
    [homelistAsyncType]: (state, action) => {
        let homelistState = JSON.parse(JSON.stringify(state))
        sessionStorage.setItem('home_new_list', JSON.stringify(action.payload.homelistzuixin));
        sessionStorage.setItem('home_promotion_list', JSON.stringify(action.payload.homelistcuxiao));
        sessionStorage.setItem('home_advanceSale_list', JSON.stringify(action.payload.homelistyushou));
        sessionStorage.setItem('home_week_list', JSON.stringify(action.payload.homelistweek));
        sessionStorage.setItem('home_mouth_list', JSON.stringify(action.payload.homelistmouth));
        homelistState.home_new_list = action.payload.homelistzuixin
        homelistState.home_promotion_list = action.payload.homelistcuxiao
        homelistState.home_advanceSale_list = action.payload.homelistyushou
        homelistState.home_week_list = action.payload.homelistweek
        homelistState.home_mouth_list = action.payload.homelistmouth


        sessionStorage.setItem('home_newprice_list', JSON.stringify(action.payload.homelistzuixinprices));
        sessionStorage.setItem('home_promotionprice_list', JSON.stringify(action.payload.homelistcuxiaoprices));
        sessionStorage.setItem('home_advanceSaleprice_list', JSON.stringify(action.payload.homelistyushouprices));
        sessionStorage.setItem('home_weekprice_list', JSON.stringify(action.payload.homelistweekprices));
        sessionStorage.setItem('home_mouthprice_list', JSON.stringify(action.payload.homelistmouthprices));
        homelistState.home_newprice_list = action.payload.homelistzuixinprices
        homelistState.home_promotionprice_list = action.payload.homelistcuxiaoprices
        homelistState.home_advanceSaleprice_list = action.payload.homelistyushouprices
        homelistState.home_weekprice_list = action.payload.homelistweekprices
        homelistState.home_mouthprice_list = action.payload.homelistmouthprices
        return homelistState
    },
    [searChangeType]: (state, action) => {
        let searchvalState = Object.assign({}, state)
        searchvalState.searchval = action.payload
        return searchvalState
    },
    [searchAsyncType]: (state, action) => {
        let searchsubmitState = JSON.parse(JSON.stringify(state))
        searchsubmitState.searchList = action.payload.data.list
        console.log(searchsubmitState.searchList)
        return searchsubmitState
    },
    [searRemoveType]: (state, action) => {
        let searchRemoveState = JSON.parse(JSON.stringify(state))
        searchRemoveState.searchval = ""
        searchRemoveState.searchList.length = 0
        return searchRemoveState
    },
    [PriceSortType]: (state, action) => {
        let PriceSortState = JSON.parse(JSON.stringify(state))
        function sortList(key) {
            return function (a, b) {
                var val1 = a[key]
                var val2 = b[key]
                if (action.payload) {
                    return (val1 - val2)
                } else {
                    return (val2 - val1)
                }
            }
        }
        PriceSortState.searchList.sort(sortList("max_price"))
        return PriceSortState
    }
}, defaultState)