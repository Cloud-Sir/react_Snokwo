import React from "react"
import HeaderTitle from "components/Jerry/headers/headerTitle.js"
import { Nav, Head, Second, Footer } from "./styled"
import AroundCart from "./aroundCart"
import GameCart from "./gameCart"

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect.js"


import { withRouter, NavLink, Switch, Route } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            price: ""
        }
    }
    render() {
        let game = { pathname: "/cart/gameCart", }
        let around = { pathname: "/cart/aroundCart", }
        let { allPrice } = this.props;
        return (
            <div className="Cart">
                <Head>
                    <HeaderTitle title="购物车" opera="编辑" />
                    <Nav>
                        <ul>
                            <li><p><NavLink to={game} activeClassName="activegamearound">游戏</NavLink></p></li>
                            <li><p><NavLink to={around} activeClassName="activegamearound">周边</NavLink></p></li>
                        </ul>
                    </Nav>
                </Head>
                <Second>
                    <Switch>
                        <Route path="/cart/gameCart" component={GameCart} />
                        <Route path="/cart/aroundCart" component={AroundCart} />
                    </Switch>
                    {/* 空购物车 */}
                    <div className="empty">
                        <p>购物车空空如也</p>
                        <span>看看游戏</span>
                        <span>看看周边</span>
                    </div>

                </Second>
                <Footer>
                    <div className="account">
                        <div className="check"> <input type="checkbox" /> </div>
                        <div className="all">全选</div>
                        <div className="main">
                            <p>总计<i>￥{allPrice}</i><span>(不含运费)</span></p>
                        </div>
                        <button>去结算</button>
                    </div>
                </Footer>
            </div>
        )
    }
}
export default Cart;