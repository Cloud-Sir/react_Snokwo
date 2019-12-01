import { directAsyncAction } from "../../../actions/grace/actionCreator.js"

export const mapStateToProps = (state) => ({

})
export const mapDispatchToProps = (dispatch) => ({
    handleAsyncDirectory() {
        dispatch(directAsyncAction())
    }
})