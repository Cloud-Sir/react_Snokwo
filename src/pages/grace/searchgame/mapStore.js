import { priceSortAction, searchAsyncAction } from "actions/grace/actionCreator"

export const mapStateToProps = (state) => ({

    searchList: state.grace.searchList

})
export const mapDispatchToProps = (dispatch) => ({
    handlePriceSort(has) {
        dispatch(priceSortAction(has))
    },
    handleSearchChange(val) {
        dispatch(searchAsyncAction(val))
    }
})