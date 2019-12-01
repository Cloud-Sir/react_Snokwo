import React from "react";
import { Fruitpastecontent, Swipercontainer, Todocontainer } from "./styled";
import { Carousel } from 'antd-mobile';
import { withRouter } from "react-router-dom";
@withRouter
class Fruitpaste extends React.Component {
    constructor() {
        super();
 
    }
    render() {
        return (
            
            <Fruitpastecontent>
                <Swipercontainer>
                    <Carousel autoplay infinite dotActiveStyle={{background:"red"}} style={{ touchAction: "none" }}>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FsDv0CLncqG5yoX2k64YVDjh71eM?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【感恩节】狙击部队新兵招募，加心愿单就能白嫖</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FkzFkvKTjD-M9c1nZ-gg1rsDEa31?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【感恩节】晒剁手病诊断报告，集赞赢免单机会</div>
                        </div>
                    </Carousel>
                </Swipercontainer>
                <Todocontainer>
                    <ul>
                        <li className="kind-active">最热帖子</li>
                        <li>最新帖子</li>
                        <li>我的关注</li>
                    </ul>
                    <div>
                        <div className="group-topic-container" onClick={this.handleToFruitpasteDetail.bind(this)}>
                            <div className="group-topic-user-info">
                                <div>
                                    <img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt="" />
                                </div>
                                <div className="group-topic-right">
                                    <p className="group-topic-name">杉果社区管理圆</p>
                                    <p className="group-topic-time">2019-11-26</p>
                                </div>
                            </div>
                            <div className="group-topic-info">
                                【感恩节】感恩节促销保价政策 拒绝背刺！（附促销剧透）
                            </div>
                            <div className="topic-images-container">
                                <img src="https://s3.sonkwo.com/FkJGVXwDelHVXpT07lPMKfhu1XW_?imageView2/1/w/95/h/95" alt="" />
                                <img src="https://s3.sonkwo.com/Fodgj5hrc1rRfMGNzz6-bPW2zXmM?imageView2/1/w/95/h/95" alt="" />
                                <img src="https://s3.sonkwo.com/FjIHd2LFi9UEPytwr03Ewncjwxc8?imageView2/1/w/95/h/95" alt="" />
                            </div>
                            <div className="group-topic-bottom">
                                <div className="group-topic-from-left">
                                    <span>来自：<a href="#/groups" onClick={this.handleBubble.bind(this)}>杉果综合讨论组</a></span>
                                </div>
                                <div className="group-topic-from-right">
                                    <i className="iconfont">{"\ue7ee"}</i>
                                    <span className="space-right">33</span>
                                    <i className="iconfont">{"\ue607"}</i>
                                    <span>79</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Todocontainer>
            </Fruitpastecontent>
        )
    }
    handleToFruitpasteDetail() {
        this.props.history.push("/fruitpastedetail")
    }
    handleBubble(e) {
        e.stopPropagation();
    }
}

export default Fruitpaste;