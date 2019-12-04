import React from "react";
import { Fruitcontainer } from "./styled";
import url from "url";
class Fruitpastep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
        let { id } = url.parse(this.props.location.search, true).query
        console.log(id, "小组页接收的id")
    }
    render() {
        return (
            <Fruitcontainer>
                <div className="posts-order-container">
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
                                <img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt="" />
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
                            <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt="" />
                            <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt="" />
                            <img src="https://s3.sonkwo.com/FqFAIDPZGSwCaVsqFxIYSeLTTrb-?imageView2/1/w/95/h/95" alt="" />
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
                </div>
            </Fruitcontainer>
        )
    }
}

export default Fruitpastep;