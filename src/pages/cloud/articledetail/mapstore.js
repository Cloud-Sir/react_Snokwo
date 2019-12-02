import { asyncarticleAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    article_detail: state.cloud.article_detail
})

export const mapDispatchToProps = (dispatch) => ({
    handleAsyncarticledetail(id) {
        dispatch(asyncarticleAction(id))
    }
})