import { concernAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    
})

export const mapDispatchToProps = (dispatch) => ({
    handleConcernAsync() {
        dispatch(concernAction())
    }
})