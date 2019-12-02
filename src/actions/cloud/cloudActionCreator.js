import { headLineType, headfiveType, acticleType, whatType} from "./cloudActionTypes";
import { headline_dataApi, headline_fiveApi, article_detailApi, confusionApi} from "api/cloud/headlines";
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