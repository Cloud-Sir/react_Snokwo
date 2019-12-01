import { createAction } from "redux-actions"
import { activitiesApi, homeApi } from "api/grace/home"
import { directAsyncType } from "./actionTypes"
//  publisherApi,
// 厂商目录
export const directAsyncAction = () => {
    let directAction = createAction(directAsyncType, (data) => data)
    // let date = new Date().getTime()// dispatch(directAction(data))
    return async (dispatch) => {

        let data = await homeApi()
        console.log(123123)
        console.log(data)

    }
}