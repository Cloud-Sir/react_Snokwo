import { homegetAsyncAction } from "actions/grace/actionCreator"
export const mapStateToProps = (state) => ({
    home_banners: state.grace.home_banners,
    home_boxes: state.grace.home_boxes,
    home_groups: state.grace.home_groups,
    home_headlines: state.grace.home_headlines,
})
export const mapDispatchToProps = (dispatch) => ({
    handleAsyncHomeGet() {
        dispatch(homegetAsyncAction())
    }
})