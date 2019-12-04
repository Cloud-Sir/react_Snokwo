import React, { Component } from 'react';
import Cookies from "js-cookie"
// import {Second} from "./styled"
class gameCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(Cookies.get("gameTypes")) ? JSON.parse(Cookies.get("gameTypes")) : []
        }
    }

    render() {
        // console.log(this.state.data, 1111111111)
        let { data } = this.state
        return (
            <div className="gameCart">
                {/* <Second> */}
                <div className="game">
                    <div className="top">
                        <div className="head">
                            <input type="checkbox" />
                            <h4>国际站（<strong>2</strong>）</h4>
                            <span>收起<i className="iconfont">{'\ue601'}</i></span>
                        </div>
                        <ul>
                            {
                                (data ? data : []).map((item) => (
                                    <li key={item.id}>
                                        <div className="check"><input type="checkbox" /></div>
                                        <img alt="" src={item.url} />
                                        <div className="goodsName">
                                            <span className="gameName">{item.name}</span>
                                            <span className="gameEname">{item.ename}</span>
                                            <i>￥56.0</i>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                {/* </Second> */}
            </div>
        );
    }
}

export default gameCart;