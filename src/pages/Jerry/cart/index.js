import React from "react"
import {Header} from "../styled/HeaderStyled"
import {Nav,Head,Second,Footer} from "./styled"
import AroundCart from "./aroundCart"
import GameCart from "./gameCart"

import {withRouter,NavLink,Switch,Route} from "react-router-dom"
@withRouter


class Cart extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="Cart">
                <Head>
                    <Header>
                        <i className="iconfont">{'\ue645'}</i>
                        <p>购物车</p>
                        <span>编辑</span>
                    </Header> 
                    <Nav>
                        <ul>
                            <li>
                                <p><NavLink to="/cart/gameCart" activeClassName="activegamearound">游戏</NavLink></p>
                            </li>
                            <li>
                                <p><NavLink to="/cart/aroundCart" activeClassName="activegamearound">周边</NavLink></p>
                            </li>
                        </ul>
                    </Nav>                          
                </Head>
                   <Second>
                       <Switch>
                            <Route path="/cart/gameCart" component={GameCart} />
                        </Switch>
                        <Switch>
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
                            <div className="check"> <input type="checkbox"/> </div>
                            <div className="all">全选</div>
                            <div className="main">
                                <p>总计<i>￥0.00</i><span>(不含运费)</span></p>
                            </div>
                            <button>去结算</button>
                        </div>
                    </Footer>
            </div>
        )
    }
}
export default Cart;