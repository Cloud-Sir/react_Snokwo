import React from "react"
import { HomeListUL } from "./styled"
import { Link } from "react-router-dom"
// 高阶组件   传递数据  渲染
class HomeUL extends React.Component {
    render() {

        let list = this.props.list ? this.props.list : []
        let price = this.props.price ? this.props.price : []
        let has = this.props.has ? this.props.has : false
        let flag = this.props.flag ? this.props.flag : false
        return (
            <HomeListUL>
                <ul className="list sk-tabs-list">
                    {
                        list.map((item, index) =>
                            (
                                < li className="item" key={index}>
                                    <div className="item-main">
                                        <Link className="mainmenu-items-bar-link" to={"/gamedetail?id=" + (item.id ? item.id : item.accessible_id) + "&game_id=" + item.product_id}>
                                            <div className=" mainmenu-items-bar container container-row">
                                                <div className="mainmenu-items-bar-img">
                                                    {/* 周月排行 */}
                                                    {
                                                        (has ? <div className="sk-presale-sort">
                                                            <div className="sort-icon">{index + 1}</div>
                                                            <div className="sort-arrow"></div>
                                                        </div> : '')
                                                    }


                                                    <img alt="" src={item.cover} />

                                                    {/* 有的有  有的无 */}
                                                    {
                                                        (flag ? (<div className="sk-presale-icon">
                                                            <div className="sale-icon">预售</div>
                                                            <div className="arrow"></div>
                                                        </div>) : (((Math.floor(Math.random() * 10)) > 5 ? (<div className="sk-presale-icon">
                                                            <div className="sale-icon">预售</div>
                                                            <div className="arrow"></div>
                                                        </div>) : '')))
                                                    }
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
                                                            {
                                                                (price ? price : []).map((itm, ind) => (

                                                                    (item.accessible_id ? item.accessible_id : item.id) === itm.id ?
                                                                        (
                                                                            <div className="item-bar-price" key={ind}>
                                                                                <div className="large-screen-font">
                                                                                    {"￥" + itm.sale_price}
                                                                                </div>
                                                                                <div className="item-discount">
                                                                                    {
                                                                                        (itm.list_price - itm.sale_price > 0) ? (<div className="round-discount-background"><div>{-(Math.floor(((itm.list_price - itm.sale_price) / itm.list_price) * 100)) + "%"}</div></div>)
                                                                                            : ""
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        ) : ""
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ul>
            </HomeListUL >
        )
    }
}
export default HomeUL
