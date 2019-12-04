import { searchAction, searchAsyncAction, searchRemoveAction } from "actions/grace/actionCreator"

export const mapStateToProps = (state) => ({
    searchval: state.grace.searchval,
    searchList: state.grace.searchList,
})
export const mapDispatchToProps = (dispatch) => ({
    handleInputChange(val) {
        dispatch(searchAction(val))
    },
    handleSearchChange(val) {
        console.log(val)
        dispatch(searchAsyncAction(val))
    },
    handleSearchRemove() {
        dispatch(searchRemoveAction())
    }
})