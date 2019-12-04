import { AroundTypes,SearchTypes,AroundDataTypes,AroundPrices,DetailTypes,saveTypes} from "./actionTypes"


import {aroundListApi,aroundDataApi,searchApi,aroundPriceApi,detailListApi,getPersonApi} from "api/Jerry/index.js"
import {createAction} from "redux-actions"
export const getAroundList=()=>{
    let aroundList=createAction(AroundTypes,(data)=>(data))

    return async (dispatch) => {
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
    let aroundPrice = createAction(AroundPrices, (data) => (data))

    return async (dispatch) => {
        let data = await aroundPriceApi();
        dispatch(aroundPrice(data));
    }
}
export const getAroundSearch = () => {
    let aroundSearch = createAction(SearchTypes, (data) => (data))

    return async (dispatch) => {
        let data = await searchApi();
        dispatch(aroundSearch(data))
    }
}

export const getDetailList = (id) => {
    const detailList = createAction(DetailTypes, (data) => (data))
    return async (dispatch) => {
        let data = await detailListApi(id);
        dispatch(detailList(data));
    }
}
export const savePrice = (data,allPrice) => ({
    type: saveTypes,
    data,
    allPrice
})
export const getPerson = () => {
    return async (dispatch) => {
        let data = await getPersonApi();
        console.log(data);
    }
}
