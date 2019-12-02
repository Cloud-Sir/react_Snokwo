import {getAroundList,getAroundData} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    list: state.Jerry.list,
    data:state.Jerry.data
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetList(){
        dispatch(getAroundList());
    },
    handleGetData() {
        dispatch(getAroundData())
    }
})