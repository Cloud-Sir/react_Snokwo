import {getAroundSearch,getAroundList} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    list: state.Jerry.list,
    searchData:state.Jerry.searchData
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetSearchData() {
        dispatch(getAroundSearch());
    },
    handleGetData() {
        dispatch(getAroundList())
    },
})