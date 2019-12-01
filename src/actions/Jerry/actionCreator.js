import {AroundTypes} from "./actionTypes"
import {aroundList} from "api/index.js"
import {createAction} from "redux-actions"
export const getAroundList=()=>{
    let aroundData=createAction(AroundTypes,(data)=>(data))

    return async (dispatch)=>{
        let data = await aroundList()
        // dispatch(aroundData)
        console.log(data);
    }
}