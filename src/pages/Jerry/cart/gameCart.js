import React, { Component } from 'react';
// import {Second} from "./styled"
class gameCart extends Component {
    render() {
        return (
            <div className="gameCart">
                {/* <Second> */}
                    <div className="game">
                        <div className="top">
                            <div className="head">
                                <input type="checkbox"/>
                                <h4>国际站（<strong>2</strong>）</h4>
                                <span>收起<i className="iconfont">{'\ue601'}</i></span>
                            </div>
                            <ul>
                                <li>
                                    <div className="check"><input type="checkbox"/></div>
                                    <img src="http://s1.sonkwo.hk/medium/910135728720663/file/44813/sonkwo-top-L-Risk-of-Rain-2.jpg?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89"/>
                                    <div className="goodsName">
                                        <span>雨中冒险</span>
                                        <i>￥56.0</i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>   
                {/* </Second> */}
            </div>
        );
    }
}

export default gameCart;