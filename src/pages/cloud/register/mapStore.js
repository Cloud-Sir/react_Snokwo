import { registerAction} from "actions/cloud/cloudActionCreator"


export const mapStateToProps = (state) => ({
    judge: state.cloud.judge
})

export const mapDispatchToProps = (dispatch) => ({
    handleregisterAsync(user,psd) {
        dispatch(registerAction(user,psd))
    }
})