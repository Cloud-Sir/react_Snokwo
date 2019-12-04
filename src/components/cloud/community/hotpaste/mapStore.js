import { hotpasteAction } from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    hot_list: state.cloud.hot_list
})

export const mapDispatchToProps = (dispatch) => ({
    handleHotpasteAsync() {
        dispatch(hotpasteAction())
    }
})