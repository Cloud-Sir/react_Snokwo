import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

@withRouter
    
class Information extends Component {
    render() {
        return (
            <div className="headline-news-container" onClick={this.handleToArticleDetail.bind(this, 1736)}>
                <div className="headline-news-container-img">
                    <img src="https://s3.sonkwo.com/FsvY8HGj7_WkajfbfjWB5qW2eBkG?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt="" />
                </div>
                <div className="headline-news-container-content">
                    <div className="headline-news-title">
                        杉果黑五：《只狼》6折新低，15款TGA提名游戏好价
                                </div>
                    <div className="headline-news-bottom">
                        <div className="headlines-news-avatar">
                            <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="headlines-news-nickname">
                            杉果-破枪瘦马
                        </div>
                        <div className="headline-news-bottom-time">
                            12月2日
                        </div>
                        <div className="headline-news-section" onClick={this.handleToHeadlinesform.bind(this,32,"资讯")}>
                            资讯
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

export default Information;