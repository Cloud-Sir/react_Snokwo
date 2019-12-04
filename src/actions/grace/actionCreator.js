import { createAction } from "redux-actions"
import { publisherApi, homeApi, activityApi, gamedetailApi, homelistApi, searchApi } from "api/grace/home"
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
} from "./actionTypes"

export const directAsyncAction = () => {//  publisherApi-厂商目录
    let directAction = createAction(directAsyncType, (data) => data)
    return async (dispatch) => {
        let discountdata = await publisherApi()
        dispatch(directAction(discountdata))
    }
}

export const homegetAsyncAction = () => {//首页
    let homeAction = createAction(homeAsyncType, (data) => data)
    return async (dispatch) => {
        let homedata = await homeApi()
        dispatch(homeAction(homedata))
    }
}
export const homelistgetAsyncAction = () => {//首页列表
    let homelistAction = createAction(homelistAsyncType, (data) => data)
    return async (dispatch) => {
        let homelistdata = await homelistApi()
        dispatch(homelistAction(homelistdata))
    }
}


export const activityAsyncAction = () => {//活动
    let activityAction = createAction(activityAsyncType, (data) => data)
    return async (dispatch) => {
        let activitydata = await activityApi()
        dispatch(activityAction(activitydata))
    }
}

export const gamedetailAsyncAction = (game_id) => {//游戏详情
    let gamedetailAction = createAction(gamedetailAsyncType, (data) => data)
    return async (dispatch) => {
        let gamedetaildata = await gamedetailApi(game_id)
        // console.log(gamedetaildata)
        dispatch(gamedetailAction(gamedetaildata))
    }
}


export const searchAction = (val) => {//搜索input改变
    let SearchAction = createAction(searChangeType, (data) => data)
    return (dispatch) => {
        dispatch(SearchAction(val))
    }
}
export const searchAsyncAction = (val) => {//搜索
    let searchAction = createAction(searchAsyncType, (data) => data)
    return async (dispatch) => {
        let searchActiondata = await searchApi(val)
        dispatch(searchAction(searchActiondata))
    }
}
export const searchRemoveAction = () => {//退出清空
    let SearchRemoveAction = createAction(searRemoveType, (data) => data)
    return (dispatch) => {
        dispatch(SearchRemoveAction())
    }
}
export const priceSortAction = (has) => {//搜索排序
    let PriceSortAction = createAction(PriceSortType, (data) => data)
    return (dispatch) => {
        dispatch(PriceSortAction(has))
    }
}
