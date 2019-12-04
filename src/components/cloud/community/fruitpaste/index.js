import React from "react";
import { Fruitpastecontent, Swipercontainer, Todocontainer } from "./styled";
import Hotpaste from "../hotpaste"
import Newest from "../newest"
import Myconcern from "../myconcern"
import { Carousel } from 'antd-mobile';
import { withRouter } from "react-router-dom";
@withRouter
class Fruitpaste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btns: ["最热帖子", "最新帖子", "我的关注"],
            activeIndex: 0
        }
    }

    render() {
        let { btns, activeIndex } = this.state;
        return (
            <Fruitpastecontent>
                <Swipercontainer>
                    <Carousel autoplay infinite dotActiveStyle={{ background: "red" }} style={{ touchAction: "none" }}>
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
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FoKzAWicF6w8ER-nEA85msigzBh4?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【今日果聊】你最期待什么样的星球大战游戏</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/Fmgyjj8LqqgqQMMThjl4NbrAdNjJ?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">圣女战旗-11.27</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FmfbaMWCiJbcMjGOemH4g8ddGiHw?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【感恩节偷跑】杉果点评小分队新兵招募中！</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FmZwU6QJrhqxMY_XQuRmDDOIDxmH?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【感恩节】感恩节促销保价政策 拒绝背刺！</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/Frm2GJSZeSlY3MWlmTR6HTby7Ncw?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">加入Steam愿望单，赢取《奇迹一刻》游戏key</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FhyLfLSdxXTVVktCEY-mkSaeSIcJ?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【今日果聊】你最期待什么样的星球大战游戏</div>
                        </div>
                        <div>
                            <div>
                                <img src="https://s3.sonkwo.com/FlqmONdDVCOmtkXbNqatmlZwvhxC?imageView2/1/w/320/h/136" alt="" />
                            </div>
                            <div className="swiperfont">【感恩节】雨中冒险2惊喜大放送</div>
                        </div>
                    </Carousel>
                </Swipercontainer>
                <Todocontainer>
                    <ul>
                        {
                            btns.map((item, index) => (
                                <li key={index} style={{ color: activeIndex == index ? "#ff5722" : "", borderBottom: activeIndex == index ? "solid 0.018rem #ff5722" : "" }}//eslint-disable-line
                                    onClick={this.handleShowpaste.bind(this, index)}
                                >{item}</li>
                            ))
                        }
                    </ul>
                    {
                        activeIndex === 0 ? <Hotpaste /> : ""
                    }
                    {
                        activeIndex === 1 ? <Newest /> : ""
                    }
                    {
                        activeIndex === 2 ? <Myconcern /> : ""
                    }
                </Todocontainer>
            </Fruitpastecontent>
        )
    }
    handleShowpaste(index) {
        this.setState({
            activeIndex: index
        })
    }
}

export default Fruitpaste;