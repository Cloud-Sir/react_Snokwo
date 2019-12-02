import {getAroundSearch,getAroundData} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    list:state.Jerry.list
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetSearchData() {
        dispatch(getAroundSearch());
    },
    handleGetData() {
        dispatch(getAroundData())
    },
})