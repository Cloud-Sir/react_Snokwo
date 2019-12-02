import { headAsyncAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    headline_data: state.cloud.headline_data
})

export const mapDispatchToProps = (dispatch) => ({
    handleHeadAsyncData() {
        dispatch(headAsyncAction())
    }
})