import React, { Fragment } from "react"
import { HomeListUL } from "./styled"
import { Link } from "react-router-dom"
// 高阶组件   传递数据  渲染
class SearchUL extends React.Component {
    render() {
        console.log(this.props, 3333)
        let { list } = this.props
        let leng = list ? list.length : 0
        return (
            <HomeListUL>
                <ul className="list sk-tabs-list">
                    {
                        (leng > 0) ? (
                            (list ? list : []).map((item, index) => ((
                                <Fragment>
                                    < li className="item" key={item.schedular_id} >
                                        <div className="item-main">
                                            <Link className="mainmenu-items-bar-link" to={"/gamedetail?id=" + (item.id ? item.id : item.accessible_id) + "&game_id=" + item.product_id}>
                                                <div className=" mainmenu-items-bar container container-row">
                                                    <div className="mainmenu-items-bar-img">
                                                        <div className="sk-presale-sort">
                                                            <div className="sort-icon">{index + 1}</div>
                                                            <div className="sort-arrow"></div>
                                                        </div>
                                                        <img alt="" src={item.pic} />
                                                        <div className="sk-presale-icon">
                                                            <div className="sale-icon">预售</div>
                                                            <div className="arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="item-bar-content">
                                                        <div className="item-content-title">
                                                            <span style={{ marginRight: "0.255rem" }}>
                                                                <span className="sale-content inter">{item.city_name}</span>
                                                                <br />
                                                                <span className="sale-content">{item.venue_name}</span>
                                                                {item.sku_name}
                                                            </span>
                                                        </div>
                                                        <div className="item-content-view">
                                                            <div className="item-bar-middle">
                                                                <div className="space">
                                                                    {/*  */}
                                                                </div>
                                                                <div className="item-bar-summary">
                                                                    <div>演出时间<br />{item.start_show_time}</div>
                                                                </div>
                                                                <div className="item-bar-summary">
                                                                    <div>门票：￥{item.max_price}</div>
                                                                </div>
                                                                <div className="item-bar-price">
                                                                    <div className="large-screen-font" dangerouslySetInnerHTML={{ __html: item.name }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    </li >
                                    {
                                        ((index === (leng - 1)) ? (< div className="wushuju" > 到底了,别拉了</div>) : "")
                                    }
                                </Fragment>
                            ))

                            )
                        ) : (
                                <div className="wushuju" style={{ height: "100%", paddingBottom: "3.9rem" }}>暂时没有更多数据</div>
                            )
                    }
                </ul>
            </HomeListUL >
        )
    }
}
export default SearchUL


