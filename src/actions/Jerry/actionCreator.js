import { AroundTypes,SearchTypes ,AroundDataTypes} from "./actionTypes"


import {aroundListApi,aroundDataApi,aroundSearchApi} from "api/Jerry/index.js"
import {createAction} from "redux-actions"
export const getAroundList=()=>{
    let aroundList=createAction(AroundTypes,(data)=>(data))

    return async (dispatch)=>{
        let data = await aroundListApi()
        dispatch(aroundList(data))
    }
}

export const getAroundData = () => {
    let aroundData = createAction(AroundDataTypes, (data) => (data))
    
    return async (dispatch) => {
        let data = await aroundDataApi();
        dispatch(aroundData(data))
        console.log(data);
    }
}

export const getAroundSearch = () => {
    let aroundSearch = createAction(SearchTypes, (data) => (data))
    
    return async (dispatch) => {
        let data = await aroundSearchApi()
        console.log(data);
    }
}