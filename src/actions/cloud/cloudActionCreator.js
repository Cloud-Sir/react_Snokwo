import {
    headLineType, headfiveType, acticleType,
    whatType, fruitType, hotType, lefttagsType,
    righttagsType, beingType, newestType, concernType,
    registerType, loginType
} from "./cloudActionTypes";


import {
    headline_dataApi, headline_fiveApi, article_detailApi,
    confusionApi, fruitpasteApi, hotpasteApi, lefttagsApi,
    righttagsApi, getShowListApi, getNewestListApi, getCncernListApi,
    registerApi, loginApi
} from "api/cloud/headlines";



import { createAction } from "redux-actions";



export const headAsyncAction = () => {
    let headAction = createAction(headLineType, (data) => data)
    
    return async (dispatch) => {
        let data = await headline_dataApi()
        dispatch(headAction(data))
    }
}

export const fiveAsyncAction = (page) => {
    let fiveAction = createAction(headfiveType, (data) => data)
    
    return async (dispatch) => {
        let data = await headline_fiveApi(page)
        dispatch(fiveAction(data))
    }
}

export const asyncarticleAction = (id) => {
    let acticleAction = createAction(acticleType, (data) => data)

    return async (dispatch) => {
        let data = await article_detailApi(id)
        dispatch(acticleAction(data))
    }
}

export const whatinfoAction = (id) => {
    let whatAction = createAction(whatType, (data) => data)

    return async (dispatch) => {
        let data = await confusionApi(id)
        
        dispatch(whatAction(data))
    }
}

export const hotpasteAction = () => {
    let hotAction = createAction(hotType, (data) => data)

    return async (dispatch) => {
        let data = await hotpasteApi()
        dispatch(hotAction(data))
    }
}

// 果贴详情拿不到数据
export const fruitpasteAction = (id) => {
    let fruitAction = createAction(fruitType, (data) => data)

    return async (dispatch) => {
        let data = await fruitpasteApi(id)
        dispatch(fruitAction(data))
    }
}

export const lefttagsAction = () => {
    let leftAction = createAction(lefttagsType, (data) => data)

    return async (dispatch) => {
        let data = await lefttagsApi()
        dispatch(leftAction(data))
    }
}

export const righttagsAction = (eqid) => {
    let rightAction = createAction(righttagsType, (data) => data)

    return async (dispatch) => {
        let data = await righttagsApi(eqid)
        dispatch(rightAction(data))
    }
}

export const beingSearchAction = (url) => {
    let beingAction = createAction(beingType, (data) => data)

    return async (dispatch) => {
        let data = await getShowListApi(url)
        dispatch(beingAction(data.data))
    }
}

export const newestAction = () => {
    let xinAction = createAction(newestType, (data) => data)

    return async (dispatch) => {
        let data = await getNewestListApi()
        dispatch(xinAction(data))
    }
}

export const concernAction = () => {
    let myconcernAction = createAction(concernType, (data) => data)

    return async (dispatch) => {
        let data = await getCncernListApi()
        console.log(data,789798)
        dispatch(myconcernAction(data))
    }
}

export const registerAction = (user,psd) => {
    let zhuceAction = createAction(registerType, (data) => data)

    return async (dispatch) => {
        let data = await registerApi(user,psd)
        dispatch(zhuceAction(data.data))
    }
}

export const loginAction = (user, psd) => {
    let deluAction = createAction(loginType, (data) => data)

    return async (dispatch) => {
        let data = await loginApi(user, psd)
        dispatch(deluAction(data.data))
    }
}