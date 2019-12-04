import { loginAction } from "actions/cloud/cloudActionCreator"


export const mapStateToProps = (state) => ({
    user_info: state.cloud.user_info
})

export const mapDispatchToProps = (dispatch) => ({
    handleLoginAsync(user, psd) {
        dispatch(loginAction(user, psd))
    }
})