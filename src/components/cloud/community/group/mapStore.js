import { lefttagsAction, righttagsAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    left_tags: state.cloud.left_tags,
    right_tags:state.cloud.right_tags
})

export const mapDispatchToProps = (dispatch) => ({
    handleLeftTagsAsync() {
        dispatch(lefttagsAction())
    },
    handlerightTagsAcync(eqid) {
        dispatch(righttagsAction(eqid))
    }
})