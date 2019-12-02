import { createAction } from "redux-actions"
import { publisherApi, homeApi, activityApi, gamedetailApi } from "api/grace/home"
import { directAsyncType, homeAsyncType, activityAsyncType, gamedetailAsyncType } from "./actionTypes"
//  publisherApi-厂商目录
export const directAsyncAction = () => {
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