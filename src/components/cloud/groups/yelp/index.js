import React, { Component } from 'react';
import { Commont } from "./styled";

class Yelp extends Component {
    constructor() {
        super();
        this.state = {
            flag: true
        }
    }
    render() {
        let { flag } = this.state;
        return (
            <div>
                <Commont>
                     <ol>
                        <li className="leftli" onClick={this.handleleftlishow.bind(this)} ref="leftli" >
                                <div className="card-linner"></div>
                                <div className="card-first">8.9</div>
                                <div className="card-second">
                                    <p>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </p>
                                </div>
                                <div className="card-third">“乐趣无穷”</div>
                                <div className="card-fourth">杉果：共1068人评价</div>
                            </li>
                            <li className="rightli" onClick={this.handlerightlishow.bind(this)} ref="rightli">
                                <div className="card-linner-steam"></div>
                                <div className="card-first-right">
                                    <div className="steam-icon">
                                        <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt=""/>
                                    </div>
                                    <div>Steam点评</div>
                                </div>
                                <div className="card-second-right"></div>
                                <div className="card-third-right">暂无评价</div>
                                <div className="card-fourth">steam：共0人评价</div>
                            </li>
                    </ol>
                    
                        <div className="posts-order-container">
                            <p>
                                <span>全部</span>
                                <i className="iconfont">{"\ue603"}</i>
                            </p>
                        </div> 


                    {flag ? <div>
                        <div className="group-topic-container">
                            <div className="group-topic-user-info">
                                <div className="group-topic-icon">
                                    <img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt="" />
                                </div>
                                <div className="group-topic-right">
                                    <div className="group-topic-name">杉果社区管理圆</div>
                                    <div className="group-topic-time">2019-10-29</div>
                                </div>
                            </div>
                            <div className="group-topic-info">
                                《荒野大镖客：救赎2》PC版部分问题集合及解决方法
                            </div>
                            <div className="group-topic-bottom">
                                <div className="group-topic-from">
                                    点评：<span>荒野大镖客：救赎2</span>
                                    <i>★</i>
                                    <i>★</i>
                                    <i>★</i>
                                    <i>★</i>
                                    <i>★</i>
                                </div>
                                <div className="group-topic-handle">
                                    <div className="group-topic-message">
                                        <i className="iconfont">{"\ue7ee"}</i>
                                        <span>24</span>
                                    </div>
                                    <div className="group-topic-like">
                                        <i className="iconfont">{"\ue607"}</i>
                                        <span>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div>
                            <div className="comment-reply-empty">
                                <div className="empty-image">
                                    <img src="https://static.sonkwo.com/frontend/assets/e764ee70a33d49f7c740490e90c67487.png" alt="" />
                                </div>
                                <div className="empty-word">暂时木有内容呢~</div>
                                <div className="empty-word-title">绑定Steam账号后您的点评会同步显示在此处</div>
                                <button>steam绑定</button>
                            </div>
                        </div>
                    }
                </Commont>
            </div>
        );
    }
    handleleftlishow() {
        this.refs.leftli.style.background = "#fff";
        this.refs.rightli.style.background = "#f4f4f4";
        this.setState({
            flag: true
        })
    }
    handlerightlishow() {
        this.refs.leftli.style.background = "#f4f4f4";
        this.refs.rightli.style.background = "#fff";
        this.setState({
            flag: false
        })
    }
}

export default Yelp;