import React, { Component, Fragment } from 'react';
import Header from "components/grace/headers"
import { Section } from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class Discount extends Component {
    render() {
        return (
            <Fragment>
                <Header title={"优惠大厅"} lefticon={"\ue645"} righticon={"\ue6a7"}  path={this.props}/>
                <Section>
                    <div className="container-header-space"></div>
                    <div className="container-button">
                        <div className="container-button-content">兑换优惠券</div>
                    </div>
                    <div className="container-list">
                        <div className="container-list-content">
                            <div className="list-left">
                                <div className="list-left-price">￥<span>120</span></div>
                                <div className="list-left-minium">满200元可用</div>
                                <div className="list-left-station">(国际站)</div>
                            </div>
                            <div className="list-content">
                                <div className="list-content-title">【¥12】满￥199.9可用【2019感恩节】</div>
                                <div className="list-content-date">2019-11-26至2019-12-04</div>
                                <div className="list-content-rules">查看详情<span className="iconfont">{"\ue604"}</span></div>
                            </div>
                            <div className="list-right">
                                <div className="list-right-get">领取</div>
                                {/* <div className="list-right-getted">已领取</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="container-list">
                        <div className="container-list-content">
                            <div className="list-left">
                                <div className="list-left-price">￥<span>120</span></div>
                                <div className="list-left-minium">满200元可用</div>
                                <div className="list-left-station">(国际站)</div>
                            </div>
                            <div className="list-content">
                                <div className="list-content-title">【¥12】满￥199.9可用【2019感恩节】</div>
                                <div className="list-content-date">2019-11-26至2019-12-04</div>
                                <div className="list-content-rules">查看详情<span className="iconfont">{"\ue604"}</span></div>
                            </div>
                            <div className="list-right">
                                {/* <div className="list-right-get">领取</div> */}
                                <div className="list-right-getted">已领取</div>
                            </div>
                        </div>
                    </div>

                    <div className="container-list">
                        <div className="container-list-content">
                            <div className="list-left">
                                <div className="list-left-price">￥<span>120</span></div>
                                <div className="list-left-minium">满200元可用</div>
                                <div className="list-left-station">(国际站)</div>
                            </div>
                            <div className="list-content">
                                <div className="list-content-title">【¥12】满￥199.9可用【2019感恩节】</div>
                                <div className="list-content-date">2019-11-26至2019-12-04</div>
                            </div>
                            <div className="list-right">
                                {/* <div className="list-right-get">领取</div> */}
                                <div className="list-right-getted">已领取</div>
                            </div>
                        </div>
                        <div className="list-bottom">
                            <div className="list-bottom-rule">领取条件：每人限领1次</div>
        <div className="list-bottom-up">收起<span className="iconfont">{"\ue601"}</span></div>
                        </div>

                    </div>
                </Section>
            </Fragment>
        );
    }
}

export default Discount;