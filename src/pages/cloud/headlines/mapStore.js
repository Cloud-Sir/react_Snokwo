import { headAsyncAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    
})

export const mapDispatchToProps = (dispatch) => ({
    handleHeadAsyncData() {
        dispatch(headAsyncAction())
    }
})