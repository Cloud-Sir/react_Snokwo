import React, { Component } from 'react';
import {Header,Downextrusion,Groupspagecontainer,Groupposts} from "./styled";

import {withRouter} from "react-router-dom";
@withRouter
class Groups extends Component {
    render() {
        return (
            <div>
                 <Header>
                    <i className="iconfont left" onClick={this.handleToBack.bind(this)}>{"\ue645"}</i>
                    <div>小组页</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Downextrusion/>
                <Groupspagecontainer>
                    <div className="groups-introduction">
                        <div className="group-base-container">
                            <div className="group-base-img">
                                <img src="http://s1.sonkwo.hk/medium/910135728720663/file/44212/sonkwo-top-L-Red-Dead-Redemption-2.jpg"/>
                            </div>
                            <div className="base-info">
                                <h4>荒野大镖客：救赎2</h4>
                                <div className="info-introduction-center">
                                    <i className="iconfont">{"\ue605"}</i>
                                    <span>45814</span>
                                    <i className="iconfont">{"\ue68b"}</i>
                                    <span>1354</span>
                                </div>
                                <div className="info-introduction-leaders">
                                    组长：<div><img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt=""/></div>
                                </div>
                            </div>
                        </div>  
                        <div className="group-btn-container">
                            <div className="btn-normal">游戏详情</div>
                            <div className="btn-focus">关注小组</div>
                        </div>
                    </div>
                    <Groupposts>
                        <ul>
                            <li className="active">果贴</li>
                            <li>点评</li>
                            <li>成就</li>
                            <li>排行</li>
                            <li>约战</li>
                        </ul>

                        {/* 果贴 */}
                        {/* <div className="posts-order-container">
                            <p>
                                <span>全部</span>
                                <i className="iconfont">{"\ue603"}</i>
                            </p>
                            <p>
                                <span>发帖时间</span>
                                <i className="iconfont">{"\ue603"}</i>
                            </p>
                        </div>
                        <div>
                            <div className="group-topic-container">
                                <div className="group-topic-user-info">
                                    <div className="group-topic-icon">
                                        <img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt=""/>
                                    </div>
                                    <div className="group-topic-right">
                                        <div className="group-topic-name">杉果社区管理圆</div>
                                        <div className="group-topic-time">2019-10-29</div>
                                    </div>
                                    <div className="group-top-topic">置顶</div>
                                    <div className="group-top-topic">精选</div>
                                    <div className="group-top-topic">推荐</div>
                                </div>
                                <div className="group-topic-info">
                                    《荒野大镖客：救赎2》PC版部分问题集合及解决方法
                                </div>
                                <div className="topic-images-container">
                                    <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt=""/>
                                    <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt=""/>
                                    <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt=""/>
                                </div>
                                <div className="group-topic-bottom">
                                    <div className="group-topic-from">
                                        来自：<span>荒野大镖客：救赎2</span>
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
                        </div> */}


                        {/* 点评 */}
                        <ol>
                            <li>
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
                            <li>
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

                        {/* 左边li */}
                        {/* <div>
                            <div className="group-topic-container">
                            <div className="group-topic-user-info">
                                    <div className="group-topic-icon">
                                        <img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt=""/>
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
                        </div> */}
                        {/* 右边li */}
                        <div>
                            <div className="comment-reply-empty">
                                <div className="empty-image">
                                    <img src="https://static.sonkwo.com/frontend/assets/e764ee70a33d49f7c740490e90c67487.png" alt=""/>
                                </div>
                                <div className="empty-word">暂时木有内容呢~</div>
                                <div className="empty-word-title">绑定Steam账号后您的点评会同步显示在此处</div>
                                <button>steam绑定</button>
                            </div>
                        </div>


                        {/* 成就 */}
                        {/* <div className="achievement">
                            <div className="group-achievement-top">
                                <div className="achievements-process">成就完成率：0% 难度：炼狱</div>
                                <div className="order-type">完成度降序<i className="iconfont">{"\ue603"}</i></div>
                            </div>
                        </div> */}

                        {/* 排行 */}
                        {/* <div className="ranking">
                            <div className="rank-none">
                                ( つ•̀ω•́)つ榜单还有空位，快来抢啊！
                            </div>
                        </div> */}


                        {/* 排行 */}
                        {/* <div className="engagement">
                            <div className="engagement-img">
                                <img src="https://static.sonkwo.com/frontend/assets/457bd98e7915a327f2de257495fcbb06.png" alt=""/>
                            </div>
                        </div> */}
                    </Groupposts>
                </Groupspagecontainer>
            </div>
        );
    }
    handleToBack(){
        this.props.history.goBack()
    }
}

export default Groups;