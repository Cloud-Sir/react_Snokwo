import { headLineType } from "./cloudActionTypes";
import { headline_dataApi } from "api/cloud/headlines";


export const headAsyncAction = () => {
    let headAction = (data) => ({
        type: headLineType,
        data
    })
    return async (dispatch) => {
        let data = await headline_dataApi()
        console.log(data)
        dispatch(headAction(data))
    }
}