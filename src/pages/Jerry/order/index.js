import React from "react"
import {connect} from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../detailGoods/connect"

import {withRouter} from "react-router-dom"

import HeaderTitle from "components/Jerry/headers/headerTitle.js"
import { Second, Footer } from "./styled"
import Cookies from "js-cookie"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Order extends React.Component{
    render() {
        console.log(this.props);
        let arr = JSON.parse(Cookies.get("buy"));
        let tag = (Math.ceil(Number(window.location.href.split("=")[1]) / 500));
        return(
            <div className="Order">
                <HeaderTitle title = "确认订单"/>
                <Second>
                    <div className="edit1">
                        <p>未编辑</p>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                    <div className="edit2">
                        <p>配送信息</p>
                        <i>无</i>
                    </div>
                    <div className="edit3">
                        {
                            arr?<div>
                                <span >
                                    <div className="ima"><img src={arr[0].img} alt="" /></div>
                                    <div className="message">
                                        <strong><h6>{arr[0].name}</h6><h2>不支持杉果钱包</h2></strong>
                                        <h5>{arr[0].price}</h5>
                                    </div>
                                </span>
                                <span>X{arr[0].count}</span>
                            </div> :<div><span>未编辑</span>
                                    <i className="iconfont">{'\ue604'}</i></div>
                        }
                    </div>
                    <div className="edit4">
                        <div className="left">
                            <span>共<i>{arr[0].count}</i>个商品</span>
                        </div>
                        <div className="right">
                            <h6>总计：<strong>￥{arr[0].count*arr[0].price}</strong></h6>
                            <h6>运费：<strong>+-￥{tag}</strong></h6>
                        </div>
                    </div>
                </Second>
                <Footer>
                    <div className="price">
                        <p>实付：<i>￥{arr[0].count*arr[0].price+tag}</i></p>
                    </div>
                    <div className="order">
                        提交订单
                    </div>
                </Footer>
            </div>
        )
    }
}
export default Order;