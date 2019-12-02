import { createAction } from "redux-actions"
import { publisherApi, homeApi, activityApi } from "api/grace/home"
import { directAsyncType, homeAsyncType } from "./actionTypes"
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
    return async (dispatch) => {
        let activitydata = await activityApi()
        console.log(activitydata)
        // dispatch()
    }
}