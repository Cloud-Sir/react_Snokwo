import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

@withRouter
    
class Video extends Component {
    render() {
        return (
            <div className="headline-news-container" onClick={this.handleToArticleDetail.bind(this, 1733)}>
                <div className="headline-news-container-img">
                    <img src="https://s3.sonkwo.com/FrP41g-62Nusu6Qom6GX1cclkEnC?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt="" />
                </div>
                <div className="headline-news-container-content">
                    <div className="headline-news-title">
                        【游戏来了】玩法我只服任天堂！“纸+笔+剪刀”的NS新游~~
                                </div>
                    <div className="headline-news-bottom">
                        <div className="headlines-news-avatar">
                            <img src="https://s4.sonkwo.com/Fk2EP56201IX2DD04NMnmUTRP9Ka?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="headlines-news-nickname">
                            杉果-威廉
                                    </div>
                        <div className="headline-news-bottom-time">
                            11月30日
                                    </div>
                        <div className="headline-news-section" onClick={this.handleToHeadlinesform.bind(this,29,"游戏来了")}>
                            游戏来了
                                    </div>
                    </div>
                </div>
            </div>
        );
    }
    handleToArticleDetail(id) {
        this.props.history.push("/articledetail/"+id);
    }
    handleToHeadlinesform(id,name,e) {
        e.stopPropagation();
        this.props.history.push("/headlinesform/"+id+"/"+name);
    }
}

export default Video;