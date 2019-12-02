import React from "react"

import { HomeListUL } from "./styled"
import { Link } from "react-router-dom"
// 高阶组件   传递数据  渲染
// Newest, Promotion, AdvanceSale, WeekRanking, MonthRanking
class HomeUL extends React.Component {
    render() {

        let list = this.props.list
        let price = this.props.price
        // console.log(list, 8989)
        // console.log(price, "0000")
        return (
            <HomeListUL>
                <ul className="list sk-tabs-list">
                    {
                        list.map((item, index) => {
                            return (
                                < li className="item" >
                                    <div className="item-main">
                                        <Link className="mainmenu-items-bar-link" to={"/gamedetail?id=" + (item.id ? item.id : item.accessible_id) + "&game_id=" + item.product_id}>
                                            <div className=" mainmenu-items-bar container container-row">
                                                <div className="mainmenu-items-bar-img">
                                                    <img alt="" src={item.cover} />

                                                    {/* 有的有  有的无 */}
                                                    <div className="sk-presale-icon">
                                                        <div className="sale-icon">预售</div>
                                                        <div className="arrow"></div>
                                                    </div>
                                                </div>
                                                <div className="item-bar-content">
                                                    <div className="item-content-title">
                                                        <span style={{ marginRight: "0.255rem" }}>
                                                            <span className="sale-content inter">国际站</span>
                                                            <span className="sale-content">促销</span>
                                                            {item.sku_name}
                                                        </span>
                                                    </div>
                                                    <div className="item-content-view">
                                                        <div className="item-bar-middle">
                                                            <div className="space">
                                                                {/*  */}
                                                            </div>
                                                            <div className="item-bar-summary">
                                                                <div>休闲</div>
                                                                <div>冒险</div>
                                                                <div>独立</div>
                                                            </div>
                                                            <div className="item-bar-price">
                                                                <div className="large-screen-font">￥28.0</div>
                                                                <div className="item-discount">
                                                                    <div className="round-discount-background">
                                                                        <div>-22%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </HomeListUL >
        )
    }
}
export default HomeUL
