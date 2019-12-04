import { beingSearchAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    show_list:state.cloud.show_list

})

export const mapDispatchToProps = (dispatch) => ({
    handleBeingSearchAsync(url) {
        dispatch(beingSearchAction(url))
    }
})