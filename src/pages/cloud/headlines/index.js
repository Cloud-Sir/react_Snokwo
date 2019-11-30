import React,{Fragment} from "react";
import {Header,Main,Todo,Article,Footer} from "./styled"
class Headlines extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Fragment>
                <Header>
                    <i className="iconfont">{"\ue610"}</i>
                    <div>杉果头条</div>
                </Header>
                <Main>
                    <div className="swiper">
                        <p>
                            <img src="https://s3.sonkwo.com/FqQruF3iX7-NLA-Qe24NK3HlucJd"/>
                        </p>
                    </div>
                    <Todo>
                        <ul>
                            <li className="dynamic">推荐</li>
                            <li>资讯</li>
                            <li>文章</li>
                            <li>视频</li>
                            <li>电台</li>
                        </ul>
                    </Todo>
                    <Article>
                        <div className="headline-news-container">
                            <div className="headline-news-container-img">
                                <img src="https://s3.sonkwo.com/FiWVZyg_lOxgvqWF8rwpZPVizdhO?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt=""/>
                            </div>
                            <div className="headline-news-container-content">
                                <div className="headline-news-title">
                                    杉果黑五特惠将至：《大镖客2》首降 19.9福袋回归
                                </div>
                                <div className="headline-news-bottom">
                                    <div className="headlines-news-avatar">
                                        <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt=""/>
                                    </div>
                                    <div className="headlines-news-nickname">
                                        杉果-破枪瘦马
                                    </div>
                                    <div className="headline-news-bottom-time">
                                        11月26日
                                    </div>
                                    <div className="headline-news-section">
                                        折扣信息
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="headline-news-container">
                            <div className="headline-news-container-img">
                                <img src="https://s3.sonkwo.com/FiWVZyg_lOxgvqWF8rwpZPVizdhO?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt=""/>
                            </div>
                            <div className="headline-news-container-content">
                                <div className="headline-news-title">
                                    杉果黑五特惠将至：《大镖客2》首降 19.9福袋回归
                                </div>
                                <div className="headline-news-bottom">
                                    <div className="headlines-news-avatar">
                                        <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt=""/>
                                    </div>
                                    <div className="headlines-news-nickname">
                                        杉果-破枪瘦马
                                    </div>
                                    <div className="headline-news-bottom-time">
                                        11月26日
                                    </div>
                                    <div className="headline-news-section">
                                        折扣信息
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Article>
                </Main>
                <Footer>
                    <ul>
                        <li>
                            <i className="iconfont">{"\ue694"}</i>
                            <span>商城</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue68b"}</i>
                            <span>头条</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue622"}</i>
                            <span>社区</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue639"}</i>
                            <span>购物车</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue617"}</i>
                            <span>我的</span>
                        </li>
                    </ul>
                </Footer>
            </Fragment>
        )
    }
}

export default Headlines;