import { AroundTypes,SearchTypes ,AroundDataTypes,AroundPrices,DetailTypes} from "./actionTypes"


import {aroundListApi,aroundDataApi,aroundSearchApi,aroundPriceApi,detailListApi} from "api/Jerry/index.js"
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
    }
}
export const getAroundPrice = () => {
    let aroundPrice = createAction(AroundPrices,(data)=>(data))
    
    return async (dispatch) => {
        let data = await aroundPriceApi();
        dispatch(aroundPrice(data));
    }
}
export const getAroundSearch = () => {
    let aroundSearch = createAction(SearchTypes, (data) => (data))
    
    return async (dispatch) => {
        let data = await aroundSearchApi()
        console.log(data);//失败
    }
}

export const getDetailList = (id) => {
    const detailList = createAction(DetailTypes,(data)=>(data))
    return async (dispatch) => {
        let data = await detailListApi(id);
        // console.log(data);
        dispatch(detailList(data));
    }
}