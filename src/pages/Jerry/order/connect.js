import {getPerson} from "actions/Jerry/actionCreator.js"

export const mapStateToProps = (state) => ({
  
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetPerson() {
        dispatch(getPerson());
    }
})