import { fiveAsyncAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    headline_five: state.cloud.headline_five
})

export const mapDispatchToProps = (dispatch) => ({
    handlefiveAsyncData(page) {
        dispatch(fiveAsyncAction(page))
    }
})