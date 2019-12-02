import {getAroundList,getAroundData,getAroundPrice} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    list: state.Jerry.list,
    data: state.Jerry.data,
    price: state.Jerry.price
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetList(){
        dispatch(getAroundList());
    },
    handleGetData() {
        dispatch(getAroundData())
    },
    handleGetPrice() {
        dispatch(getAroundPrice())
    }
})