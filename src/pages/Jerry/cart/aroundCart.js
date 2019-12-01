import React, { Component } from 'react';
// import {Second} from "./styled"
class AroundCart extends Component {
    render() {
        return (
            <div className="aroundCart">
                {/* <Second> */}
                    <ul>
                        <li>
                            <div className="checkbox">
                                    <input type="checkbox"/>
                            </div>
                            <div className="image">
                                <img  alt="" src="https://s1.sonkwo.com/Fi1QmcIgNxUqYc_URAbIjPy5X7-R?imageView2/1/w/88/h/80"/>
                            </div>
                            <div className="describe">
                                <div className="title">
                                    <h3>进度款未付款IG付款IG付款IG付款IG进而</h3>
                                    <span>进度款未付款IG进而</span>
                                </div>
                                <div className="price">
                                    <p>￥258.0</p>
                                    <div className="count">
                                        <h4>-</h4>
                                        <h5>1</h5>
                                        <h4>+</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                {/* </Second> */}
            </div>
        );
    }
}

export default AroundCart;