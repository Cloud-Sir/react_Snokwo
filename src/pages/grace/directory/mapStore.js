import { directAsyncAction } from "actions/grace/actionCreator.js"

export const mapStateToProps = (state) => ({
    changshanglist: state.grace.changshanglist
})
export const mapDispatchToProps = (dispatch) => ({
    handleAsyncDirectory() {
        dispatch(directAsyncAction())
    }
})