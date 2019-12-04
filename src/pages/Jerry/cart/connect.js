import {savePrice} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({
    allPrice:state.Jerry.allPrice
})
export const mapDispatchToProps=(dispatch)=>({
    savePrice(allprice) {
        dispatch(savePrice(allprice))
    }
})