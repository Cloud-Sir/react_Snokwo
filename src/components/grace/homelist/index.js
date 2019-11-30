import React from "react"

import { HomeListUL } from "./styled"

// 高阶组件   传递数据  渲染

export default class HomeUL extends React.Component {
    render() {
        return (
            <HomeListUL>
                <ul className="list sk-tabs-list">
                    <li className="item">
                        <div className="item-main">
                            <a className="mainmenu-items-bar-link">
                                <div className=" mainmenu-items-bar container container-row">
                                    <div className="mainmenu-items-bar-img">
                                        <img src="http://s1.sonkwo.hk/medium/910135728720663/file/44460/sonkwo-top-L-Incredible-Dracula-The-Ice-Kingdom.jpg?x-oss-process=image/resize,limit_0,m_lfit,w_150,h_89" />
                                        
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
                                                德古拉传奇6：冰雪王国冰雪王国冰雪王国冰雪王国冰雪王国
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
                            </a>
                        </div>
                    </li>
                </ul>
            </HomeListUL>
        )
    }
}

