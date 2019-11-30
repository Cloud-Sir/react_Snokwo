import React from "react"
import {Header} from "../styled/HeaderStyled"
import {Nav,Head,Second,Footer} from "./styled"
import AroundCart from "./aroundCart"
import GameCart from "./gameCart"

import {withRouter,Link} from "react-router-dom"
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
                                <p><Link to="/cart/gameCart">游戏</Link></p>
                            </li>
                            <li>
                                <p><Link to="/cart/aroundCart">周边</Link></p>
                            </li>
                        </ul>
                    </Nav>                          
                </Head>
                   <Second>
                        <AroundCart/>
                        <GameCart/>
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