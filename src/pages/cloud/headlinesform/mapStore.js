import { whatinfoAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    what_info: state.cloud.what_info
})

export const mapDispatchToProps = (dispatch) => ({
    handlewhatInfo(id) {
        dispatch(whatinfoAction(id))
    }
})