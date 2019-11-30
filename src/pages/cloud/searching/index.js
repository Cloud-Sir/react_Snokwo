import React from "react";
import {Bigbox,Header,Contentbox} from "./styled"

class Searching extends React.Component{
    render(){
        return(
            <Bigbox>
                <Header>
                    <div className="top-header">
                         <i className="iconfont">{"\ue645"}</i>
                         <div className="savekeyword">
                            <div className="searchres">
                                2<span>✖</span>
                            </div>
                         </div>
                    </div>
                    <div className="bottom-header">
                        <ul>
                            <li className="changeactive">小组</li>
                            <li>用户</li>
                            <li>果贴</li>
                            <li>点评</li>
                        </ul>
                    </div>
                </Header>
                <Contentbox>
                    <div className="howmanydata">共找到了<span>277</span>个结果</div>
                    <ul>
                        {/* 小组 */}
                        {/* <li>
                            <div className="group-list-img">
                                <img src="http://s1.sonkwo.hk/medium/910135728720663/file/4159/82986a36852f92b5b51c9e10644bf030?x-oss-process=image?x-oss-process=image/resize,limit_0,m_fill,w_80,h_47" alt=""/>
                            </div>
                            <div className="group-list-content">
                                <p className="group-list-title">暗黑血统 III</p>
                                <p className="group-list-heat">
                                    <i className="iconfont fontcolor">{"\ue605"}</i>
                                    <span>1104</span>
                                    <i className="iconfont fontcolor">{"\ue68b"}</i>
                                    <span>11</span>
                                </p>
                            </div>
                        </li> */}


                        {/* 用户 */}
                        {/* <li>
                            <div className="user-img">
                                <img src="http://sonkwo-avatar.qiniudn.com/2ef96e0cf49744f7a3947c194741656d?imageView2/1/w/60/h/60" alt=""/>
                            </div>
                            <div className="user-information">
                                <p className="user-name">唐2</p>
                                <p className="user-brief">
                                    <span>动态：0</span>
                                    <span>粉丝：0</span>
                                </p>
                            </div>
                            <div className="user-click-like">
                                <p>+关注</p>
                            </div>
                        </li> */}


                        {/* 果贴 */}
                        {/* <li>
                            <div className="tie-info">
                                <div className="tie-img">
                                    <img src="https://s4.sonkwo.com/FlTC8aHrbxLWgaXHB4QhpVAM7gKt?imageView2/1/w/60/h/60" alt=""/>
                                </div>
                                <div className="tie-info-box">
                                    <p className="tie-info-name">放过我吧</p>
                                    <p className="tie-info-time">2016-10-9</p>
                                </div>
                            </div>
                            <div className="tie-content">
                                just case 2 2 pics test
                            </div>
                            <div className="tie-bottom">
                                来自：<span>时光留言机</span>
                            </div>
                        </li> */}


                        <li>
                            <div className="tie-info">
                                <div className="tie-img">
                                    <img src="https://s4.sonkwo.com/FlTC8aHrbxLWgaXHB4QhpVAM7gKt?imageView2/1/w/60/h/60" alt=""/>
                                </div>
                                <div className="tie-info-box">
                                    <p className="tie-info-name">放过我吧</p>
                                    <p className="tie-info-time">2016-10-9</p>
                                </div>
                            </div>
                            <div className="tie-content">
                                just case 2 2 pics test
                            </div>
                            <div className="tie-bottom">
                                点评：<span>旁观者</span>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                            </div>
                        </li>
                    </ul>
                </Contentbox>
            </Bigbox>
        )
    }
}

export default Searching;