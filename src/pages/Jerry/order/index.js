import React from "react"
import {connect} from "react-redux"
import {Header} from "components/Jerry/headers/header.js"
import {Second,Footer} from "./styled"
class Order extends React.Component{
    render(){
        return(
            <div className="Order">
                <Header title="确认订单"/>
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
                        <div>
                            <span>未编辑</span>
                            <span>未使用</span>
                        </div>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                    <div className="edit4">
                        <div className="left">
                            <span>共<i>0</i>个商品</span>
                        </div>
                        <div className="right">
                            <h6>总计：<strong>￥0.00</strong></h6>
                            <h6>总计：<strong>￥0.00</strong></h6>
                        </div>
                    </div>
                </Second>
                <Footer>
                    <div className="price">
                        <p>实付：<i>￥0.00</i></p>
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