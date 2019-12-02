import React from "react"

import HomeUL from "../homelist/index"
// Newest, Promotion, AdvanceSale, WeekRanking, MonthRanking
//     home_new_list, home_newprice_list,
//     home_promotion_list, home_promotionprice_list,
//     home_advanceSale_list, home_advanceSaleprice_list,
//     home_week_list, home_weekprice_list,
//     home_mouth_list, home_mouthprice_list
class Newest extends React.Component {
    render() {
        let home_new_list = this.props.home_new_list ? this.props.home_new_list : []
        let home_newprice_list = this.props.home_newprice_list ? this.props.home_newprice_list : []
        return (
            <HomeUL list={home_new_list} price={home_newprice_list} />
        )
    }
}
class Promotion extends React.Component {
    render() {
        let home_promotion_list = this.props.home_promotion_list ? this.props.home_promotion_list : []
        let home_promotionprice_list = this.props.home_promotionprice_list ? this.props.home_promotionprice_list : []
        return (
            <HomeUL list={home_promotion_list} price={home_promotionprice_list} />
        )
    }
}
class AdvanceSale extends React.Component {
    render() {
        let home_advanceSale_list = this.props.home_advanceSale_list ? this.props.home_advanceSale_list : []
        let home_advanceSaleprice_list = this.props.home_advanceSaleprice_list ? this.props.home_advanceSaleprice_list : []
        return (
            <HomeUL list={home_advanceSale_list} price={home_advanceSaleprice_list} />
        )
    }
}
class WeekRanking extends React.Component {
    render() {
        let home_week_list = this.props.home_week_list ? this.props.home_week_list : []
        let home_weekprice_list = this.props.home_weekprice_list ? this.props.home_weekprice_list : []
        return (
            <HomeUL list={home_week_list} price={home_weekprice_list} has={true} />
        )
    }
}
class MonthRanking extends React.Component {
    render() {
        let home_mouth_list = this.props.home_mouth_list ? this.props.home_mouth_list : []
        let home_mouthprice_list = this.props.home_mouthprice_list ? this.props.home_mouthprice_list : []
        return (
            <HomeUL list={home_mouth_list} price={home_mouthprice_list} has={true} />
        )
    }
}

export {
    Newest,
    Promotion,
    AdvanceSale,
    WeekRanking,
    MonthRanking,
}