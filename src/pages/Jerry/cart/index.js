import React from "react"
import HeaderTitle from "components/Jerry/headers/headerTitle.js"
import { Nav, Head, Second, Footer } from "./styled"
import AroundCart from "./aroundCart"
import GameCart from "./gameCart"

import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"
import Cookies from "js-cookie"

import { withRouter, NavLink, Switch, Route ,Redirect} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            price: "",
            flag:""
        }
    }
    render() {
        let game = { pathname: "/cart/gameCart", }
        let around = { pathname: "/cart/aroundCart", }
        let { allPrice, goods } = this.props;
        var type = [];
        var gameTypes = [];
        if (Cookies.get("types")) {
            type = JSON.parse(Cookies.get("types"));
        }
        if (Cookies.get("gameTypes")) {
            gameTypes = JSON.parse(Cookies.get("gameTypes"));
        }
       
        return (
            <div className="Cart">
                <Head>
                    <HeaderTitle title="购物车" opera="编辑" handle={this.handleDel.bind(this)}/>
                    <Nav>
                        <ul>
                            <li><p><NavLink to={game} activeClassName="activegamearound">游戏</NavLink></p></li>
                            <li><p><NavLink to={around} activeClassName="activegamearound">周边</NavLink></p></li>
                        </ul>
                    </Nav>
                </Head>
                <Second>
                    <Switch>
                        <Route path="/cart/gameCart" component={GameCart}/>
                        <Route path="/cart/aroundCart" component={AroundCart}/>
                    </Switch>
                    < Redirect to="/cart/gameCart"/>
                    {/* 空购物车 */}
                    <div className="empty" style={{ display: (goods.length == 0 && type.length == 0 && gameTypes.length==0) ? "block" : "none" }}//eslint-disable-line
                    >
                        <p>购物车空空如也</p>
                        < NavLink to = "/peripheral"><span>看看游戏</span></NavLink >
                        < NavLink to="/peripheral"><span>看看周边</span></NavLink >
                        
                    </div>
                </Second>
                <Footer>
                    <div className="account">
                        <div className="check"> <input type="checkbox" /> </div>
                        <div className="all">全选</div>
                        <div className="main">
                            <p>总计<i>￥{allPrice?allPrice:0}</i><span>(不含运费)</span></p>
                        </div>
                        <button>去结算</button>
                    </div>
                </Footer>
            </div>
        )
    }
    handleDel(value) {
        
    }
}
export default Cart;