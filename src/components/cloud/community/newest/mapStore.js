import { newestAction } from "actions/cloud/cloudActionCreator";


export const mapStateToProps = (state) => ({
    newset_list: state.cloud.newset_list
})


export const mapDispatchToProps = (dispatch) => ({
    handleNewestAsync() {
        dispatch(newestAction())
    }
})