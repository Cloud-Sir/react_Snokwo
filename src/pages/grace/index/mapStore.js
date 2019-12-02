import { homegetAsyncAction, homelistgetAsyncAction } from "actions/grace/actionCreator"
export const mapStateToProps = (state) => ({
    home_banners: state.grace.home_banners,
    home_boxes: state.grace.home_boxes,
    home_groups: state.grace.home_groups,
    home_headlines: state.grace.home_headlines,

    home_new_list: state.grace.home_new_list,
    home_promotion_list: state.grace.home_promotion_list,
    home_advanceSale_list: state.grace.home_advanceSale_list,
    home_week_list: state.grace.home_week_list,
    home_mouth_list: state.grace.home_mouth_list,

    home_newprice_list: state.grace.home_newprice_list,
    home_promotionprice_list: state.grace.home_promotionprice_list,
    home_advanceSaleprice_list: state.grace.home_advanceSaleprice_list,
    home_weekprice_list: state.grace.home_weekprice_list,
    home_mouthprice_list: state.grace.home_mouthprice_list
})
export const mapDispatchToProps = (dispatch) => ({
    handleAsyncHomeGet() {
        dispatch(homegetAsyncAction())
    },
    handleAsyncListGet() {
        dispatch(homelistgetAsyncAction())
    }
})