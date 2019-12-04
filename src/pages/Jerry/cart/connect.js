import {savePrice} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    allPrice: state.Jerry.allPrice,
    goods:state.Jerry.goods
})
export const mapDispatchToProps=(dispatch)=>({
    savePrice(data,allprice) {
        dispatch(savePrice(data,allprice))
    }
})