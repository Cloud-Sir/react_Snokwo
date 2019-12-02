import { activityAsyncAction } from "actions/grace/actionCreator"
export const mapStateToProps = (state) => ({
    activity_list: state.grace.activity_list
})

export const mapDispatchToProps = (dispatch) => ({
    handleActivites() {
        dispatch(activityAsyncAction())
    }
})