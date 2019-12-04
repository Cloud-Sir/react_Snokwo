import { headLineType, headfiveType, acticleType, whatType, fruitType, hotType, lefttagsType, righttagsType} from "./cloudActionTypes";
import { headline_dataApi, headline_fiveApi, article_detailApi, confusionApi, fruitpasteApi, hotpasteApi, lefttagsApi, righttagsApi} from "api/cloud/headlines";
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