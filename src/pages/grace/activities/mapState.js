import { activityAsyncAction } from "actions/grace/actionCreator"
export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({
    handleActivites() {
        dispatch(activityAsyncAction())
    }
})