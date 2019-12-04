import { AroundTypes,AroundDataTypes,AroundPrices,DetailTypes,saveTypes,SearchTypes} from "actions/Jerry/actionTypes.js"
import { handleActions } from "redux-actions"
const defaultState = {
    list: [],
    data: [],
    price: [],
    detailList: [],
    
    allPrice: "",
    goods:"",

    searchData:""
}
export default handleActions({
    [AroundTypes]: (state, action) => {//周边基本数据
        let aroundState = JSON.parse(JSON.stringify(state));
        aroundState.list = action.payload;
        return aroundState;
    },
    [AroundDataTypes]: (state, action) => {
        let aroundState = JSON.parse(JSON.stringify(state));
        aroundState.data = action.payload;
        return aroundState;
    },
    [AroundPrices]: (state, action) => {
        let aroundPrice = JSON.parse(JSON.stringify(state));
        aroundPrice.price = action.payload;
        return aroundPrice;
    },
    [DetailTypes]: (state, action) => {
        let detailState = JSON.parse(JSON.stringify(state));
        detailState.detailList = action.payload;
        return detailState
    },
    [saveTypes]: (state, action) => {
        let saveState = JSON.parse(JSON.stringify(state));
        saveState.allPrice = action.allPrice;
        saveState.goods = action.data;
        return saveState;
    },
    [SearchTypes]: (state, action) => {
        let SearchState = JSON.parse(JSON.stringify(state));
        SearchState.searchData = action.payload.data.list;
        return SearchState;
    }
},defaultState)
