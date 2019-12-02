import {getDetailList,getAroundPrice} from "actions/Jerry/actionCreator.js"

export const mapStateToProps = (state) => ({
    detailList: state.Jerry.detailList,
    price: state.Jerry.price
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetDetails(id) {
        dispatch(getDetailList(id));
    },
    handleGetPrice() {
        dispatch(getAroundPrice())
    }
})