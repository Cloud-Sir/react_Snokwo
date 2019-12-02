import {getAroundList} from "actions/Jerry/actionCreator.js"

export const mapStateToProps=(state)=>({

})
export const mapDispatchToProps=(dispatch)=>({
    handleGetData(){
        console.log(1111)
        dispatch(getAroundList());
    }
})